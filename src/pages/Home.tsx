import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, BookOpen, Award, Star, CheckCircle, Brain, Zap, Target } from 'lucide-react';

const Home = () => {
  const stats = [
    { number: '10,000+', label: 'Students Enrolled' },
    { number: '50+', label: 'Expert Instructors' },
    { number: '100+', label: 'Courses Available' },
    { number: '95%', label: 'Success Rate' },
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Learning',
      description: 'Personalized learning paths adapted to your pace and style using advanced AI algorithms.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience in AI and machine learning.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Hands-on Projects',
      description: 'Build real-world projects and gain practical experience with cutting-edge technologies.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Career Support',
      description: 'Get job placement assistance and career guidance to land your dream AI role.',
    },
  ];

  const popularCourses = [
    {
      id: 1,
      title: 'Machine Learning Fundamentals',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.9,
      students: 2500,
      price: 99,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Machine Learning',
      duration: '8 weeks',
    },
    {
      id: 2,
      title: 'Deep Learning with PyTorch',
      instructor: 'Prof. Michael Chen',
      rating: 4.8,
      students: 1800,
      price: 149,
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Deep Learning',
      duration: '12 weeks',
    },
    {
      id: 3,
      title: 'Natural Language Processing',
      instructor: 'Dr. Emily Rodriguez',
      rating: 4.7,
      students: 1200,
      price: 129,
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'NLP',
      duration: '10 weeks',
    },
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'ML Engineer at Google',
      content: 'AI Academy transformed my career. The hands-on approach and expert guidance helped me land my dream job.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
    },
    {
      name: 'Maria Garcia',
      role: 'Data Scientist at Microsoft',
      content: 'The curriculum is cutting-edge and the instructors are world-class. Highly recommend to anyone serious about AI.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'AI Researcher at OpenAI',
      content: 'Exceptional quality education with practical projects that prepared me for real-world challenges.',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Master <span className="text-gradient">Artificial Intelligence</span> with Expert Guidance
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of students learning cutting-edge AI technologies through hands-on projects, 
                expert instruction, and personalized learning paths.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses" className="btn-primary inline-flex items-center justify-center space-x-2">
                  <span>Start Learning</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="btn-secondary inline-flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI Learning"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">95% Success Rate</p>
                    <p className="text-sm text-gray-600">Job Placement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive AI education with cutting-edge curriculum, expert instructors, 
              and hands-on experience to prepare you for the future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular AI and machine learning courses designed by industry experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <Link key={course.id} to={`/courses/${course.id}`} className="card overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {course.category}
                    </span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">by {course.instructor}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-gray-500">({course.students} students)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">${course.price}</span>
                    <button className="btn-primary text-sm py-2 px-4">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/courses" className="btn-secondary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our successful graduates who are now working at top tech companies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have transformed their careers with our comprehensive AI education program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Browse Courses
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;