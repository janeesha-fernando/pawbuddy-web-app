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

const formSchema = z.object({
  email: z.string().min(1,{message: 'Email is required'}).email({message: "Enter a valid email address"}),
  password: z.string().min(1,{message:'Password is required'}),
})

export default function LoginForm() {
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
                  <Input placeholder='Your email' {... field} className='text-base border border-gray-200 px-4 py-3' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
           />
           {/* Password */}
            <FormField 
            control={form.control}
            name='password'
            render={({field}) => (
              <FormItem>
                <div className='relative'>
                  <FormControl>
                    <Input placeholder='Password' type={showPassword? 'text' : 'password'} {... field} className='text-base border border-gray-200 px-4 py-3' />
                  </FormControl>
                  <Button onClick={togglePasswordVisibility} className='absolute right-1 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent'>
                   {showPassword? <FaRegEyeSlash className='text-gray-500 text-lg' /> : <MdOutlineRemoveRedEye className='text-gray-500 text-lg' />}
                  </Button>
                </div>  
                <FormMessage />
              </FormItem>
            )}
            />
            <Button type='submit' className='w-full mt-4 p-4 bg-blue-500 rounded-md text-base'>Login</Button>
        </form>
      </Form>
    </div>
  )
}
