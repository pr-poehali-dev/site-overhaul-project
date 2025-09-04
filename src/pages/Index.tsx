import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Building2",
      title: "Проектирование зданий",
      description: "Разработка проектов жилых, коммерческих и промышленных объектов"
    },
    {
      icon: "Wrench",
      title: "Конструкторские решения", 
      description: "Разработка конструктивных решений и технических проектов"
    },
    {
      icon: "Calculator",
      title: "Инженерные расчеты",
      description: "Расчеты несущих конструкций и инженерных систем"
    },
    {
      icon: "FileText",
      title: "Проектная документация",
      description: "Подготовка полного комплекта проектной документации"
    }
  ];

  const projects = [
    {
      title: "ЖК Современный",
      description: "Многоэтажный жилой комплекс",
      status: "Завершен",
      year: "2024"
    },
    {
      title: "Торговый центр Галерея",
      description: "Крупный торговый комплекс",
      status: "В работе",
      year: "2024"
    },
    {
      title: "Производственный комплекс",
      description: "Промышленное предприятие",
      status: "Завершен", 
      year: "2023"
    }
  ];

  const team = [
    {
      name: "Алексей Петров",
      position: "Главный архитектор",
      experience: "15 лет опыта"
    },
    {
      name: "Мария Сидорова",
      position: "Ведущий конструктор",
      experience: "12 лет опыта"
    },
    {
      name: "Дмитрий Козлов",
      position: "Инженер-проектировщик",
      experience: "8 лет опыта"
    }
  ];

  const news = [
    {
      date: "15.08.2024",
      title: "Завершен проект ЖК Современный",
      preview: "Успешно сдан в эксплуатацию жилой комплекс на 200 квартир"
    },
    {
      date: "01.08.2024", 
      title: "Новые технологии проектирования",
      preview: "Внедрили BIM-технологии для повышения качества проектов"
    },
    {
      date: "20.07.2024",
      title: "Расширение команды",
      preview: "К нам присоединились новые специалисты"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={32} className="text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">ПКБ Отчизна</h1>
                <p className="text-sm text-muted-foreground">Проектно-конструкторское бюро</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Проекты</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Команда</a>
              <a href="#news" className="text-foreground hover:text-primary transition-colors">Новости</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">Заказать проект</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Современные проектные решения
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаем архитектурные и конструкторские проекты любой сложности 
              с применением передовых технологий и многолетним опытом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="FolderOpen" size={20} className="mr-2" />
                Посмотреть проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Наши услуги</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр проектно-конструкторских работ для создания качественных объектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Реализованные проекты</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры успешно завершенных и находящихся в работе проектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.status === 'Завершен' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Год: {project.year}</span>
                    <Button variant="outline" size="sm">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Наша команда</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональные специалисты с многолетним опытом в области проектирования
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Новости компании</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Последние события и достижения нашей компании
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Calendar" size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{item.preview}</CardDescription>
                  <Button variant="outline" size="sm">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Контакты</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+7 (342) 123-45-67</p>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@pkbotchizna.ru</p>
                <p className="text-muted-foreground">Ответим в течение дня</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">г. Пермь</p>
                <p className="text-muted-foreground">ул. Ленина, д. 50, оф. 301</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={24} className="text-primary" />
                <h4 className="text-xl font-bold">ПКБ Отчизна</h4>
              </div>
              <p className="text-background/80">
                Профессиональное проектно-конструкторское бюро
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-background/80">
                <li>Архитектурное проектирование</li>
                <li>Конструкторские решения</li>
                <li>Инженерные расчеты</li>
                <li>Проектная документация</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Проекты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-background/80">
                <li>+7 (342) 123-45-67</li>
                <li>info@pkbotchizna.ru</li>
                <li>г. Пермь, ул. Ленина, 50</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60">© 2024 ПКБ Отчизна. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;