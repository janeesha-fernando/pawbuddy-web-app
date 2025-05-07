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
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  email: z.string().min(1,{message: 'Email is required'}).email({message: "Enter a valid email address"}),
  password: z.string().min(1,{message:'Password is required'}),
})

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const togglePasswordVisibility = () => {
    if (form.getValues("password").trim()) {
      setShowPassword(!showPassword);
    }
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values)
      router.push('/dashboard')
  }

  return (
    <div className='my-6 flex flex-col justify-center'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
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
           <div className='flex flex-col space-y-4'>
              {/* Password */}
              <FormField 
              control={form.control}
              name='password'
              render={({field}) => (
                <FormItem>
                  <div className='relative'>
                    <FormControl>
                      <Input placeholder='Password' type={showPassword? 'text' : 'password'} {... field} className='text-base border border-gray-200 p-4' />
                    </FormControl>
                    <Button type='button' onClick={togglePasswordVisibility} className='absolute right-1 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent'>
                      {showPassword? <FaRegEyeSlash className='text-gray-500 text-lg' /> : <MdOutlineRemoveRedEye className='text-gray-500 text-lg' />}
                    </Button>
                  </div>  
                  <FormMessage />
                </FormItem>
              )}
              />
              <Link href={'/auth/forgot-password'} className='text-sm text-blue-500 text-right'>Forget Password ?</Link>
           </div>
            <Button type='submit' className='w-full p-4 bg-blue-500 rounded-md text-base'>Login</Button>
        </form>
      </Form>
    </div>
  )
}
