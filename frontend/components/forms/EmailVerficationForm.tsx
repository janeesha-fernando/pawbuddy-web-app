"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import {z} from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form"
import { Input} from '../ui/input'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  email: z.string().min(1,{message: 'Email is required'}).email({message: "Enter a valid email address"}),
})

export default function EmailVerficationForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "", 
    }
  })

 const onSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values)
      router.push('/auth/forgot-password/otp')
  }

  return (
    <div className='my-6 flex flex-col justify-center'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          {/* Email Address */}
          <FormField
            control={form.control}
            name='email'
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Your email' {... field} className='text-base border border-gray-200 p-4' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
           />
          <Button type='submit' className='w-full p-4 bg-blue-500 rounded-md text-base'>Send Code</Button>
        </form>
      </Form>
    </div>
  )
}
