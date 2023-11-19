'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from "./ui/button";
import { FormField, FormControl, Form, FormMessage, FormItem } from "./ui/form";
import { Input } from "./ui/input";


const formSchema = z.object({
  email: z.string().email({ message: 'Por favor, insira um e-mail válido.' })
  .min(10, { message: 'E-mail muito curto, insira pelo menos 10 caracteres' })
  .max(40, { message: 'E-mail muito longo, insira no máximo 40 caracteres' })
})

export function The_form () {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return(
    <>
    <div className="mt-12 md:px-44 lg:px-60 lg:mt-14">
      <Form {...form}>
            <form onSubmit={form.handleSubmit (onSubmit)} className="flex gap-2">
              <FormField 
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Seu melhor e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant={'default'} type="submit">Assinar Agora</Button>
            </form>
        </Form>
        </div>
    </>
  )
}