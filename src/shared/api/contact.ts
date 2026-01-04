import { api } from "@/shared/api"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

interface ContactUsData {
    full_name: string
    email: string
    subject: string
    message: string
    phone_number: string
    company: string
}


const contactService = async (data: ContactUsData) => {
    const res = await api.post("/contact-us/", data)
    return res.data
}

export const useContactMutation = () => {
    return useMutation({
        mutationFn: contactService,
        onSuccess: () => {
            toast.success("Message sent successfully")
        },
        onError: () => {
            toast.error("Failed to send message")
        }
    })
}

