"use client"

const FAQs = [
    {
        question: "Bagaimana cara daftar di MO?",
        answer: <span>Cara daftar di MasterOnline (MO) sangat mudah dan Gratis, silahkan klik di <span className="font-bold">&quot;Daftar&quot;</span>, lalu isi data pribadi anda dan submit. Silahkan tunggu sekitar satu hari kerja untuk approval dari admin. Setelah mendapatkan email approval, anda sudah bisa melakukan login dan mulai menggunakan MO.</span>
    },
    {
        question: "Apakah saya harus membayar biaya tertentu?",
        answer: <span>MasterOnline menawarkan 3 option berlangganan (subcription), dari yang gratis sampai berbayar, silahkan lihat detail harga di menu <span className="font-bold">&quot; Pricing&quot;</span>.</span>
    },
    {
        question: "Apabila saya membutuhkan bantuan cara pemakaian atau masalah teknis, saya bisa menghubungi siapa?",
        answer: <span>Silahkan menghubungi kami di no telepon <a href="tel:0216349318" className="font-bold">021 6349318</a> atau dengan email di <a href="mailto:support@masteronline.co.id" className="font-bold">support@masteronline.co.id</a>, silahkan baca keterangan lengkap di menu Support.</span>
    },
    {
        question: "Bagaimana cara berhenti berlangganan?",
        answer: <span>Silahkan menghubungi Customer Service kami.</span>
    },
    {
        question: "Apakah saya bisa menjadi partner bisnis MO?",
        answer: <span>	MasterOnline menawarkan 2 jenis kerjasama, yaitu Sales Partner (SP) dan Certified Support Partner (CSP), silahkan baca keterangan detail di menu <span className="font-bold">&quot;Partner&quot;</span>. Setelah daftar sebagai Partner, silahkan tunggu konfirmasi approval melalui email.</span>
    },
    {
        question: "Apakah saya bisa minta perubahan atau penambahan system MO?",
        answer: <span>Tidak, MO merupakan paket system yang dirancang untuk umum, tapi anda bisa memberi masukan dan usulan melalui email kepada kami dan kami akan melakukan evaluasi, apabila bermanfaat untuk kepentingan umum, kami akan melakukan revisi versi baru.</span>
    },
    {
        question: "Bagaimana dengan keamanan data saya?",
        answer: <span>Data anda akan di-encrypt dan disimpan di server Amazon Web Service (AWS) yang merupakan penyedia layanan cloud terbaik dunia.</span>
    },
    {
        question: "Apakah MO bisa digunakan untuk bisnis tradisional (bukan online) atau UKMK?",
        answer: <span>Bisa.</span>
    },
]
export default function FAQ() {
    return (
        <div className="bg-white text-black py-24">
            <div className="container px-8 mx-auto">
                <div className="flex gap-4 md:gap-6 lg:gap-8 flex-col md:flex-row">
                    <div className="w-full md:w-5/12">
                        <div className="text-base md:text-lg lg:text-2xl font-bold pb-1">Dukungan</div>
                        <div className="text-3.5xl md:text-5xl lg:text-6xl font-bold font-rubik pb-8">FAQ</div>
                        <div className="text-sm md:text-lg lg:text-xl">Pertanyaan seputar Master Online yang perlu anda ketahui sebelum berlangganan Master Online.</div>
                    </div>
                    <div className="w-full md:w-7/12">
                        {FAQs.map(faq => (
                            <div key={faq.question} className="collapse collapse-arrow">
                                <input type="radio" name="faq-accordion" className="peer" />
                                <div className="collapse-title text-sm md:text-xl lg:text-2xl font-semibold text-gray-500 peer-checked:text-paprika-900 px-0 pr-10 py-2 md:py-4">{faq.question} </div>
                                <div className="collapse-content font-medium text-xs md:text-base lg:text-xl p-0 peer-checked:pb-8">{faq.answer}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}