import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const steps = [
    {
      icon: "UserPlus",
      title: "Зарегистрируйтесь",
      description: "Получите доступ к эксклюзивным предложениям от топовых банков"
    },
    {
      icon: "CreditCard",
      title: "Выберите карту",
      description: "Оформите банковскую карту по любой из представленных ссылок"
    },
    {
      icon: "CheckCircle",
      title: "Получите одобрение",
      description: "Дождитесь одобрения заявки от банка (обычно 5-15 минут)"
    },
    {
      icon: "Wallet",
      title: "Получите деньги",
      description: "Вознаграждение автоматически поступит на ваш счет"
    }
  ];

  const testimonials = [
    {
      name: "Александра М.",
      amount: "7 500 ₽",
      text: "Оформила три карты за вечер. Очень удобно, деньги пришли быстро!",
      period: "за 2 часа"
    },
    {
      name: "Дмитрий К.",
      amount: "12 000 ₽",
      text: "Не верил, что так просто. Оформил карты для себя и жены. Спасибо!",
      period: "за 1 день"
    },
    {
      name: "Елена В.",
      amount: "5 200 ₽",
      text: "Отличный способ заработать в свободное время. Рекомендую всем!",
      period: "за 1 час"
    }
  ];

  const bankOffers = [
    {
      bank: "Тинькофф Банк",
      cardName: "Tinkoff Black",
      reward: "2 000 ₽",
      features: ["Кешбэк до 30%", "Бесплатное обслуживание", "Быстрое оформление"],
      link: "#"
    },
    {
      bank: "Альфа-Банк",
      cardName: "Альфа-Карта",
      reward: "1 500 ₽",
      features: ["Кешбэк 2%", "100 дней без %", "Онлайн одобрение"],
      link: "#"
    },
    {
      bank: "Сбербанк",
      cardName: "СберКарта",
      reward: "1 000 ₽",
      features: ["До 10% на остаток", "Бонусы СПАСИБО", "0₽ за обслуживание"],
      link: "#"
    },
    {
      bank: "Райффайзен Банк",
      cardName: "Все сразу",
      reward: "2 500 ₽",
      features: ["Кешбэк до 5%", "Снятие без комиссии", "Моментальный выпуск"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center animate-fade-in">
          <Badge className="mb-6 text-lg px-6 py-2" variant="default">
            Проверенный способ заработка
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Заработайте{" "}
            <span className="text-primary inline-block animate-scale-in">
              5 000 ₽
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-muted-foreground font-semibold">
            всего за 1 час
          </p>
          <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl mx-auto">
            Оформляйте банковские карты по нашим ссылкам и получайте вознаграждение за каждую одобренную заявку
          </p>
          <Button size="lg" className="text-xl px-10 py-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Начать зарабатывать
            <Icon name="ArrowRight" className="ml-2" size={24} />
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16 bg-background">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Как получить свои 5 000 рублей?</h2>
          <p className="text-xl text-muted-foreground">Простая инструкция из 4 шагов</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name={step.icon as any} className="text-primary" size={32} />
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="mb-2">Шаг {index + 1}</Badge>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bank Offers Section */}
      <section className="container mx-auto px-4 py-16 bg-secondary/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Доступные предложения</h2>
          <p className="text-xl text-muted-foreground">Выбирайте карту и начинайте зарабатывать</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {bankOffers.map((offer, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all hover:shadow-xl group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-2xl mb-1">{offer.bank}</CardTitle>
                    <CardDescription className="text-base">{offer.cardName}</CardDescription>
                  </div>
                  <Badge className="text-lg px-4 py-2 bg-accent text-accent-foreground">
                    {offer.reward}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <Icon name="Check" className="text-primary mr-2 flex-shrink-0" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full group-hover:scale-105 transition-transform" size="lg">
                  Оформить карту
                  <Icon name="ExternalLink" className="ml-2" size={18} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 bg-background">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы наших пользователей</h2>
          <p className="text-xl text-muted-foreground">Реальные истории успеха</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {testimonial.period}
                    </CardDescription>
                  </div>
                </div>
                <Badge className="w-fit bg-primary/10 text-primary border-primary">
                  Заработал: {testimonial.amount}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Остались вопросы?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Мы всегда готовы помочь! Свяжитесь с нами удобным способом
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="border-2 hover:border-primary transition-all">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <Icon name="Mail" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
                <CardDescription className="text-base">
                  support@example.com
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <Icon name="MessageCircle" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-lg">Telegram</CardTitle>
                <CardDescription className="text-base">
                  @support_bot
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-lg">Телефон</CardTitle>
                <CardDescription className="text-base">
                  +7 (900) 123-45-67
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="border-2 border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Готовы начать?</CardTitle>
              <CardDescription className="text-lg">
                Присоединяйтесь к тысячам людей, которые уже зарабатывают с нами
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="text-lg px-8 py-6">
                Оформить первую карту
                <Icon name="Sparkles" className="ml-2" size={20} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Заработок на картах. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
