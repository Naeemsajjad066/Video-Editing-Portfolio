import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Instagram, Youtube, Linkedin, MessageSquare } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzzvnpra"; // Replace with your Formspree ID

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      setLoading(true);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: data,
      });
      if (res.ok) {
        toast({ title: "Message sent!", description: "Thanks — I'll get back to you shortly." });
        form.reset();
      } else {
        throw new Error("Formspree not configured");
      }
    } catch (err) {
      window.location.href = "mailto:aftabrasheed836@gmail.com";
    } finally {
      setLoading(false);
    }
  };

  // WhatsApp contact function
  const openWhatsApp = () => {
    const phoneNumber = "+923185885836"; // Replace with your actual WhatsApp number
    const message = "Hi Aftab! I saw your portfolio and would like to discuss a video project. Can we chat about it?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto container-padding">
        <div className="max-w-2xl mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Let's Work Together</h2>
          <p className="text-muted-foreground">Tell me about your project and timeline. I'll reply within 24 hours.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input name="name" placeholder="Your name" required />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <Textarea name="message" placeholder="Tell me about your project..." required />
            </div>
            <Button type="submit" variant="hero" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <p className="text-sm mb-3">Prefer direct contact?</p>
              <div className="flex flex-wrap gap-3">
                <a 
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm hover-scale transition-all duration-300 hover:bg-accent/80" 
                  href="mailto:aftabrasheed836@gmail.com"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
                <button 
                  onClick={openWhatsApp}
                  className="inline-flex items-center gap-2 rounded-md bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-sm transition-all duration-300 hover:scale-105"
                >
                  <MessageSquare className="h-4 w-4" /> WhatsApp
                </button>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm mb-3">Follow and connect</p>
              <div className="flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm hover-scale" href="#" aria-label="YouTube"><Youtube className="h-4 w-4" /> YouTube</a>
                <a className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm hover-scale" href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /> Instagram</a>
                <a className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm hover-scale" href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
