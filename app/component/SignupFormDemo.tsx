"use client";
import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Title from "./Title";
import toast, { Toaster } from "react-hot-toast";

export function SignupFormDemo() {
    const form = useRef<HTMLFormElement | null>(null);
    const [showToaster, setShowToaster] = useState(false);

    useEffect(() => {
        // Only show toaster on client to avoid SSR mismatch
        setShowToaster(true);
    }, []);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) {
            console.error("Form reference is null!");
            toast.error("Form reference is missing.");
            return;
        }

        emailjs
            .sendForm(
                "service_nxlphv9",
                "template_4le6vgu",
                form.current,
                "kAMkkmapbdoNlaRiU"
            )
            .then(
                (result) => {
                    console.log("SUCCESS!", result.status, result.text);
                    toast.success("Message sent successfully!");
                    form.current?.reset();
                },
                (error) => {
                    console.error("FAILED...", error.text || error);
                    toast.error("Failed to send message.");
                }
            );
    };

    return (
        <div className="mt-14">
            {showToaster && <Toaster position="top-center" />}

            <Title text="Contact 📨" className="flex flex-col items-center justify-center -rotate-6" />
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Send me a direct message to connect
                </p>

                <form
                    className="my-8"
                    ref={form}
                    onSubmit={sendEmail}
                    suppressHydrationWarning
                >
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input
                                id="firstname"
                                placeholder="Neymar"
                                type="text"
                                name="user_name"
                                required
                            />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input
                                id="lastname"
                                placeholder="Jr"
                                type="text"
                                name="user_lastname"
                            />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            placeholder="neymar10@gmail.com"
                            type="email"
                            name="user_email"
                            required
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="text">Message</Label>
                      <textarea
  id="text"
  placeholder="Hey 👋...."
  name="message"
  className="h-32 w-full p-2 rounded-md bg-zinc-800 border outline-none transition-all duration-200"
  required
></textarea>


                    </LabelInputContainer>

                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        Send Message &rarr;
                        <BottomGradient />
                    </button>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                </form>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
