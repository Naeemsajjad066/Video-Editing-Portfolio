import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Carter",
    role: "YouTube Creator",
    quote:
      "Their edits boosted my channel’s retention instantly. Seamless pacing and killer hooks.",
    avatar: avatar1,
    stat: "+70% views in 3 months",
  },
  {
    name: "Maya Singh",
    role: "Brand Manager",
    quote:
      "Professional, fast, and on-brand every time. Motion graphics are top-notch.",
    avatar: avatar2,
    stat: "500+ videos edited",
  },
  {
    name: "Noah Kim",
    role: "Founder, StudioOne",
    quote:
      "Our ads perform better with clean cuts and engaging visuals. Highly recommend.",
    avatar: avatar3,
    stat: "+35% CTR on campaigns",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto container-padding">
        <div className="max-w-2xl mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Client Results</h2>
          <p className="text-muted-foreground">Real feedback and outcomes from creators and brands.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.avatar} alt={`${t.name} headshot`} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="font-medium leading-tight">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <blockquote className="text-sm text-foreground mb-3">“{t.quote}”</blockquote>
                <p className="text-xs text-primary font-medium">{t.stat}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
