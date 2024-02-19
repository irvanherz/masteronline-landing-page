/* eslint-disable @next/next/no-img-element */
import AuthLayout from "@/components/AuthLayout";
import Input from "@/components/Input";
import { IMAGE_BASEURL } from "../config";


export default function Login() {
    return (
        <AuthLayout contentWrapperClassName="flex flex-col justify-center">
            <div className="p-8">
                <div className="container max-w-[800px] mx-auto flex flex-col md:flex-row bg-paprika-900 shadow-lg">
                    <div className="h-48 md:h-auto w-full md:w-1/3 relative">
                        <img src={`${IMAGE_BASEURL}/images/fingerprint.svg`} alt='' className="absolute w-[120%] h-[120%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover" />
                        <a className="block absolute w-full left-0 top-1/2 transform -translate-y-1/2 px-16 text-center" href="/">
                            <img src={`${IMAGE_BASEURL}/images/masteronline-logo-white.png`} alt="" className="w-full max-w-[200px] inline-block" />
                        </a>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col items-start justify-center gap-8 p-8 md:p-16 relative overflow-hidden bg-white text-black">
                        <div className="flex flex-col items-start justify-center gap-2 self-stretch w-full relative flex-none">
                            <div className="relative w-fit font-bold text-2xl">
                                Masuk Ke Master Online
                            </div>
                            <p className="relative self-stretch text-xs">
                                Untuk keamanan yang lebih terjaga, jangan pernah memberi tahu password anda kepada siapapun.
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-8 self-stretch w-full relative flex-none">
                            <div className="flex flex-col items-start justify-center gap-2 self-stretch w-full relative flex-none">
                                <Input
                                    placeholder="Email"
                                    wrapperClassName="w-full"
                                />
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    wrapperClassName="w-full"
                                />
                            </div>
                            <p className="relative self-stretch font-normal text-xs">
                                Selalu ganti password anda secara berkala. Gunakan password yang sulit di tebak. Jangan gunakan nama, tanggal
                                lahir, atau kata yang mudah di tebak.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-1 self-stretch w-full relative flex-none">
                            <div className="relative self-stretch font-medium text-sm">
                                Belum punya akun?
                            </div>
                            <div className="inline-flex items-center gap-2 relative flex-none">
                                <a className="relative w-fit font-bold text-sm text-paprika-900" href="/register">
                                    Daftar Sekarang &rarr;
                                </a>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-sm">Login</button>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}