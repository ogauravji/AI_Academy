import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, List, Star, Clock, Users, BookOpen } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'dl', name: 'Deep Learning' },
    { id: 'nlp', name: 'Natural Language Processing' },
    { id: 'cv', name: 'Computer Vision' },
    { id: 'ds', name: 'Data Science' },
    { id: 'robotics', name: 'Robotics' },
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Machine Learning Fundamentals',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.9,
      students: 2500,
      price: 99,
      originalPrice: 149,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'ml',
      level: 'beginner',
      duration: '8 weeks',
      lessons: 45,
      description: 'Learn the fundamentals of machine learning with hands-on projects and real-world applications.',
      skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    },
    {
      id: 2,
      title: 'Deep Learning with PyTorch',
      instructor: 'Prof. Michael Chen',
      rating: 4.8,
      students: 1800,
      price: 149,
      originalPrice: 199,
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'dl',
      level: 'intermediate',
      duration: '12 weeks',
      lessons: 60,
      description: 'Master deep learning concepts and build neural networks using PyTorch framework.',
      skills: ['PyTorch', 'Neural Networks', 'CNN', 'RNN'],
    },
    {
      id: 3,
      title: 'Natural Language Processing',
      instructor: 'Dr. Emily Rodriguez',
      rating: 4.7,
      students: 1200,
      price: 129,
      originalPrice: 179,
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'nlp',
      level: 'intermediate',
      duration: '10 weeks',
      lessons: 50,
      description: 'Explore the world of NLP and build applications that understand human language.',
      skills: ['NLTK', 'spaCy', 'Transformers', 'BERT'],
    },
    {
      id: 4,
      title: 'Computer Vision Mastery',
      instructor: 'Dr. James Wilson',
      rating: 4.6,
      students: 950,
      price: 139,
      originalPrice: 189,
      image: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'cv',
      level: 'advanced',
      duration: '14 weeks',
      lessons: 70,
      description: 'Build advanced computer vision applications using state-of-the-art techniques.',
      skills: ['OpenCV', 'TensorFlow', 'YOLO', 'Image Processing'],
    },
    {
      id: 5,
      title: 'Data Science Complete Course',
      instructor: 'Prof. Lisa Anderson',
      rating: 4.8,
      students: 3200,
      price: 89,
      originalPrice: 129,
      image: 'https://images.pexels.com/photos/8386431/pexels-photo-8386431.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'ds',
      level: 'beginner',
      duration: '16 weeks',
      lessons: 80,
      description: 'Complete data science bootcamp covering statistics, visualization, and machine learning.',
      skills: ['Python', 'R', 'SQL', 'Tableau'],
    },
    {
      id: 6,
      title: 'AI Robotics Engineering',
      instructor: 'Dr. Robert Kim',
      rating: 4.5,
      students: 680,
      price: 199,
      originalPrice: 249,
      image: 'https://images.pexels.com/photos/8386425/pexels-photo-8386425.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'robotics',
      level: 'advanced',
      duration: '20 weeks',
      lessons: 90,
      description: 'Design and build intelligent robots using AI and machine learning techniques.',
      skills: ['ROS', 'Python', 'Arduino', 'Sensors'],
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.students - a.students;
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover comprehensive AI and machine learning courses designed by industry experts.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {levels.map(level => (
                    <option key={level.id} value={level.id}>{level.name}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* View Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white rounded-lg shadow-sm p-4">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Showing {sortedCourses.length} of {courses.length} courses
              </p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Courses Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-6'}>
              {sortedCourses.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  className={`card overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 ${
                    viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                  }`}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className={`object-cover ${
                      viewMode === 'list' ? 'w-full sm:w-64 h-48 sm:h-auto' : 'w-full h-48'
                    }`}
                  />
                  <div className="p-6 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {categories.find(cat => cat.id === course.category)?.name}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium capitalize">
                        {course.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-2">by {course.instructor}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{course.rating}</span>
                        <span className="text-sm text-gray-500">({course.students})</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{course.skills.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary-600">${course.price}</span>
                        {course.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                        )}
                      </div>
                      <button className="btn-primary text-sm py-2 px-4">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {sortedCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;