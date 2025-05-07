"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

const formSchema = z.object({
  otp: z.string().min(1,{message: "Validation code is required."}).min(6, { message: "OTP must be 6 digits" })
})

export function OTPForm() {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
    
    if(pathname === "/auth/create-account/email-validation") {
      toast('Success',{
        description: 'Your account has been successfully created!',
        duration:2000,
        style:{
          borderLeft: '4px solid #0CAC42',
          fontSize: '14px',
        }
      })
      router.push("/dashboard");

    } else {
      router.push("/auth/forgot-password/reset-password");
    }

  }

  return (
    <div className="my-6 flex flex-col items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} {...field}>
                  <InputOTPGroup className="space-x-4">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
            )}
          />
          <Button type='submit' className='w-full mt-4 p-4 bg-blue-500 rounded-md text-base'>Verify</Button>
        </form>
      </Form>
    </div>
  )
}
