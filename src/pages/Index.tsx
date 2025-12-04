import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    {
      icon: "Package",
      title: "Напольные покрытия",
      description: "Ламинат, паркет, кварцвинил, плитка"
    },
    {
      icon: "Paintbrush",
      title: "Стеновые материалы",
      description: "Обои, декоративные панели, краски"
    },
    {
      icon: "Home",
      title: "Потолочные системы",
      description: "Натяжные потолки, гипсокартон, плитка"
    },
    {
      icon: "Wrench",
      title: "Комплексная поставка",
      description: "Расчёт, закупка, доставка материалов"
    }
  ];

  const portfolio = [
    {
      title: "ЖК «Премьер Палас»",
      area: "240 м²",
      materials: "Итальянская керамика, немецкий ламинат",
      image: "https://cdn.poehali.dev/projects/f7d0e354-f45f-4790-a87e-4d519bef408d/files/e6eada04-31d7-43a9-926d-eab1cf20d91b.jpg"
    },
    {
      title: "Офис компании «Альфа»",
      area: "380 м²",
      materials: "Кварцвинил, декоративная штукатурка",
      image: "https://cdn.poehali.dev/projects/f7d0e354-f45f-4790-a87e-4d519bef408d/files/b153bccd-a8bd-405b-9a38-a270d783fe12.jpg"
    },
    {
      title: "Частный дом в КП «Сосны»",
      area: "520 м²",
      materials: "Паркетная доска, натуральный камень",
      image: "https://cdn.poehali.dev/projects/f7d0e354-f45f-4790-a87e-4d519bef408d/files/91cd2fbf-bc62-47ed-845b-a14e4ca055ef.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Ирина Волкова",
      position: "Дизайнер интерьеров",
      text: "Профессиональный подход, знание всех нюансов материалов. Помог выбрать оптимальные решения в рамках бюджета."
    },
    {
      name: "Сергей Петров",
      position: "Владелец бизнеса",
      text: "Организовал поставку для офиса под ключ. Все точно в срок, качество материалов отличное."
    },
    {
      name: "Елена Краснова",
      position: "Частный клиент",
      text: "Благодарна за терпение и консультации. Помог разобраться в огромном ассортименте и выбрать идеальное."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://functions.poehali.dev/9cd3766d-ebb6-4159-ac34-eac6989345e9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-[#1A1F2C] to-[#2C3E50] text-white py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-sm font-medium">
                Менеджер по чистовым материалам
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">Никита Фролов
</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Профессиональный подбор и поставка отделочных материалов для вашего проекта. Более 8 лет опыта работы с премиальными брендами.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/f62bc211-58bb-4604-bc88-103cb3b76b7b.jpg"
                  alt="Алексей Соколов"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Обо мне</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Специализируюсь на подборе и поставке чистовых материалов для жилых и коммерческих объектов. Работаю напрямую с ведущими производителями и дистрибьюторами.
                </p>
                <p>
                  Помогаю архитекторам, дизайнерам и частным клиентам найти оптимальные решения с учётом бюджета, сроков и технических требований проекта.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground mt-2">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground mt-2">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground mt-2">Брендов</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="border-l-4 border-primary hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Award" size={32} className="text-primary" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Сертифицированный специалист</h3>
                      <p className="text-muted-foreground">Прошёл обучение у ведущих производителей напольных покрытий и отделочных материалов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-primary hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="TrendingUp" size={32} className="text-primary" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Актуальные тренды</h3>
                      <p className="text-muted-foreground">Постоянно отслеживаю новинки рынка и могу предложить современные решения</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-primary hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="ShieldCheck" size={32} className="text-primary" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Гарантия качества</h3>
                      <p className="text-muted-foreground">Работаю только с проверенными поставщиками, гарантирую подлинность материалов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground">Комплексные решения для вашего проекта</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale border-2 border-transparent hover:border-primary transition-all">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-xl">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Реализованные проекты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="hover-scale overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-bold text-xl">{project.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Ruler" size={16} />
                    <span>{project.area}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.materials}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Отзывы</h2>
            <p className="text-xl text-muted-foreground">Мнения клиентов о работе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-[#1A1F2C] to-[#2C3E50] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">Контакты</h2>
                <p className="text-xl text-gray-300">Свяжитесь со мной удобным способом</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Телефон</div>
                    <div className="text-lg font-medium">+7 (965)41-71-978</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-lg font-medium">fnafnafna@yandex.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Telegram</div>
                    <div className="text-lg font-medium">@NikitaBBC
</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Город</div>
                    <div className="text-lg font-medium">Москва</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Отправить сообщение</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-32"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-white text-sm">
                      ✓ Сообщение отправлено! Свяжемся с вами в ближайшее время.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-white text-sm">
                      Ошибка отправки. Попробуйте позже или свяжитесь по телефону.
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={20} className="mr-2" />
                        Отправить
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1F2C] text-gray-400 py-8 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <p>© 2024 Алексей Соколов. Менеджер по чистовым материалам</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;