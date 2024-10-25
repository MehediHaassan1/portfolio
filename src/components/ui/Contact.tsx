import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useRef, useState, FormEvent } from "react";
import toast from "react-hot-toast";

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);

    // useState for form fields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        message: "",
    });

    // Handle form field changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    "service_y31on5e",
                    "template_65m301q",
                    form.current,
                    "NJQOqznCRy-P8c_fy"
                )
                .then(
                    () => {
                        toast.success("Email sent successfully!");
                        setFormData({
                            name: "",   
                            email: "",
                            website: "",
                            message: "",
                        });
                    },
                    (error) => {
                        toast.error(`Failed to send email: ${error.text}`);
                    }
                );
        }
    };

    return (
        <div
            id="contact-me"
            className="container mx-auto min-h-screen py-10 md:flex items-center justify-between gap-6 space-y-10"
        >
            <div className="md:w-1/2">
                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="h-10 border-2 border-black p-2 max-w-lg w-full rounded focus:outline-none"
                        placeholder="Your Name"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-10 border-2 border-black p-2 max-w-lg w-full rounded focus:outline-none"
                        placeholder="Your Email"
                    />
                    <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="h-10 border-2 border-black p-2 max-w-lg w-full rounded focus:outline-none"
                        placeholder="Your website (If exists)"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="h-32 border-2 border-black p-2 max-w-lg w-full rounded focus:outline-none"
                        placeholder="Your Message"
                    />
                    <button
                        type="submit"
                        className="bg-black text-white font-bold rounded hover:bg-gray-800 py-3 px-5"
                    >
                        Get In Touch
                    </button>
                </form>
            </div>
            <div className="md:w-1/2">
                <div className="space-y-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                        Let's <span className="outline-text">talk</span> for
                        <br />
                        Something special
                    </h1>
                    <p className="text-zinc-500 lg:w-3/4">
                        I seek to push the limits of creativity to create
                        high-engaging, user-friendly, and memorable interactive
                        experiences.
                    </p>
                    <p className="text-lg font-semibold flex items-center gap-4">
                        <CiMail className="lg:size-6" />{" "}
                        mehedi.haassan1@gmail.com
                    </p>
                    <p className="text-lg font-semibold flex items-center gap-4">
                        <IoCallOutline className="lg:size-6" /> (+88) 013259
                        12538
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
