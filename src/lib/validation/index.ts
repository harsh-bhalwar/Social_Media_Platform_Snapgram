import { z } from "zod"

export const SignupSchema = z.object({
    name: z.string().min(2, { message: "Name must be a minimum of 8 characters." }),
    username: z.string().min(2, { message: "Username should be atleasr 2 character(s)" }).max(50),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password should be atlest 8 characters." })

})

export const SigninSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password should be atlest 8 characters." })

})

export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
})

export const ProfileValidation = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    username: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    bio: z.string(),
});