"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
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
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const formSchema = z.object({
  password: z.string().
  min(1,{message:'Password is required'}).
  min(8,{message:'Password must be at least 8 characters long'})
  .refine((password) => /[A-Z]/.test(password),{message: 'Password must contain at least one uppercase letter'})
  .refine((password) => /[a-z]/.test(password),{message: 'Password must contain at least one lowercase letter'})
  .refine((password) => /[0-9]/.test(password),{message: 'Password must contain at least one number'})
  .refine((password) => /[!@#$%^&*]/.test(password),{message: 'Password must contain at least one special character'}),
  confirm:z.string().min(1,{message:'Confirm Password is required'})
}).refine((data) => data.password === data.confirm,{
  message: "Passwords don't match",
  path: ["confirm"],
})

export default function ResetPasswordForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm: ""
    }
  })

  const togglePasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  const toggleConfirmPasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values)
      toast('Success',{
        description: 'Your password has been changes successfully.',
        duration:2000,
        style:{
          borderLeft: '4px solid #0CAC42',
          fontSize: '14px',
        }
      })
      router.push('/dashboard')
  }

  return (
    <div className='my-6 flex flex-col justify-center'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
           {/* New Password */}
           <FormField 
              control={form.control}
              name='password'
              render={({field}) => (
                <FormItem>
                  <div className='relative'>
                    <FormControl>
                      <Input placeholder='New Password' type={showPassword? 'text' : 'password'} {... field} className='text-base border border-gray-200 p-4' />
                    </FormControl>
                    <Button type='button' onClick={togglePasswordVisibility} className='absolute right-1 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent'>
                      {showPassword? <FaRegEyeSlash className='text-gray-500 text-lg' /> : <MdOutlineRemoveRedEye className='text-gray-500 text-lg' />}
                    </Button>
                  </div>  
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Confirm Password */}
            <FormField 
            control={form.control}
            name='confirm'
            render={({field}) => (
              <FormItem>
                <div className='relative'>
                  <FormControl>
                    <Input placeholder='Confirm Password' type={showConfirmPassword? 'text' : 'password'} {... field} className='text-base border border-gray-200 p-4' />
                  </FormControl>
                  <Button type='button' onClick={toggleConfirmPasswordVisibility} className='absolute right-1 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent'>
                    	{showConfirmPassword? <FaRegEyeSlash className='text-gray-500 text-lg' /> : <MdOutlineRemoveRedEye className='text-gray-500 text-lg' />}
                  </Button>
                </div>  
                <FormMessage />
              </FormItem>
            )}
            />
            <Button type='submit' className='w-full p-4 bg-blue-500 rounded-md text-base'>Reset Password</Button>
        </form>
      </Form>
    </div>
  )
}
