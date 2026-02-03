"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contacts() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY
    );

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);
      e.target.reset();
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className=""
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 16 }}
        className="w-full"
      >
        {/* HEADING */}
        <h2 className="text-3xl uppercase tracking-tight text-accent mb-20">
          Contact
        </h2>

        <div className="flex flex-col xl:flex-row gap-16">
          {/* FORM */}
          <div className="xl:w-[55%]">
            {success ? (
              <div className="p-10 bg-white/5 rounded-xl">
                <h3 className="text-3xl text-accent mb-4">
                  Message sent 🎉
                </h3>
                <p className="text-white/60">
                  I’ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-10 bg-white/5 rounded-xl"
              >
                {/* Anti-spam honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex="-1"
                />

                <Input name="name" placeholder="Name" required />
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="phone" placeholder="Phone" />

                <Select name="service">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Service</SelectLabel>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="uiux">UI / UX</SelectItem>
                      <SelectItem value="android">Android Development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea
                  name="message"
                  className="h-[200px]"
                  placeholder="Your message"
                  required
                />

                <Button disabled={loading} className="max-w-40">
                  {loading ? "Sending..." : "Send message"}
                </Button>
              </form>
            )}
          </div>

          {/* INFO */}
          <div className="flex-1 flex items-center xl:justify-end">
            <ul className="space-y-6 text-white/80">
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-accent" />
                <span>(+91) 9663175199</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-accent" />
                <span className="break-all">
                  shree.charan.767@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-accent" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}