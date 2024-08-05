"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LogIn() {
    const [formData, setFormData] = useState({
        password: "",
        phoneNumber: "",
        email: "",
        agreeTerms: false,
        firstName: "",
        lastName: "",
    });

    const router = useRouter();

    const handleChange = (e:any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleCheckboxChange = () => {
        setFormData({
            ...formData,
            agreeTerms: !formData.agreeTerms,
        });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // handle form submission here
        setFormData({
            password: "",
            phoneNumber: "",
            email: "",
            agreeTerms: false,
            firstName: "",
            lastName: "",
        });
    };

    const handleNavigation = () => {
        router.push('/signup');
    };

    return (
        <form className=" overflow-hidden w-full h-screen flex flex-row-reverse" onSubmit={handleSubmit}>
            <div 
        className="w-[50%] fixed top-0 left-0 hidden lg:block h-screen "
        >
            <Image
        src="/assets/coffeeshop.png"
        layout='fill'
        alt="restaurant"
        className='bg-center b'
        
      />
            </div>
            <div className="flex w-full lg:w-[50%] bg-white p-6 justify-center items-center">
                <div className="w-full max-w-md">
                    <div className="mb-12">
                        <h4 className="font-semibold text-xl">Log In</h4>
                    </div>

                    <div className="mb-4">
                        <Label className="text-black">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            size={12}
                            maxLength={200}
                            className="border-[1px] border-black/40 w-full h-10 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <Label className="text-black">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            size={12}
                            maxLength={16}
                            className="border-[1px] border-black/40 w-full h-10 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-[10px] flex gap-2 items-center">
                            <Checkbox
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onCheckedChange={handleCheckboxChange}
                            />
                            I agree to the <u>terms of service</u>
                        </p>
                    </div>

                    <div className="flex flex-col gap-y-6 xl:flex-row xl:gap-x-6 mb-4">
                        <Button
                            type="submit"
                            className="w-full bg-orange hover:bg-orange-hover h-12"
                            disabled={!formData.agreeTerms}
                        >
                            Submit
                        </Button>
                    </div>

                    <div className="flex items-center my-4 w-full">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-2 text-gray-500">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <div className="flex flex-col gap-y-6 xl:flex-row xl:gap-x-6 mb-4">
                        <Button className="w-full h-10 bg-white border text-left text-sm flex items-center text-gray hover:bg-gray-hover/45">
                            <Image
                                src='/assets/icons8-google.svg'
                                width={160}
                                height={170}
                                alt=""
                                className="google mr-2 w-8"
                            />
                            Continue with Google
                        </Button>
                        <Button className="w-full h-10 bg-white border text-sm text-gray hover:bg-gray-hover/45">
                            <Image
                                src='/assets/icons8-facebook.svg'
                                width={160}
                                height={170}
                                alt=""
                                className="google mr-2 w-8"
                            />
                            Continue with Facebook
                        </Button>
                    </div>
                    
                    <div className="text-center">
                        <p>
                            Dont have an account?{" "}
                            <button onClick={handleNavigation} className='text-orange'>
                                Sign Up
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}
