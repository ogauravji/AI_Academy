import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, Clock, Users, BookOpen, Award, Play, CheckCircle, 
  Download, Share2, Heart, ArrowLeft, Calendar, Globe, 
  MessageCircle, ThumbsUp, User
} from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock course data - in a real app, this would come from an API
  const course = {
    id: 1,
    title: 'Machine Learning Fundamentals',
    instructor: {
      name: 'Dr. Sarah Johnson',
      title: 'Senior ML Engineer at Google',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      bio: 'Dr. Sarah Johnson is a renowned machine learning expert with over 15 years of experience in the field. She has published numerous papers and worked on cutting-edge AI projects at Google.',
      courses: 12,
      students: 25000,
      rating: 4.9,
    },
    rating: 4.9,
    students: 2500,
    price: 99,
    originalPrice: 149,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Machine Learning',
    level: 'Beginner',
    duration: '8 weeks',
    lessons: 45,
    projects: 5,
    certificate: true,
    language: 'English',
    lastUpdated: '2024-01-15',
    description: 'Master the fundamentals of machine learning with this comprehensive course. Learn essential algorithms, data preprocessing techniques, and build real-world projects using Python and popular ML libraries.',
    whatYouWillLearn: [
      'Understand core machine learning concepts and algorithms',
      'Implement supervised and unsupervised learning models',
      'Master data preprocessing and feature engineering',
      'Build and evaluate machine learning models',
      'Use Python libraries like scikit-learn, pandas, and numpy',
      'Deploy ML models to production environments',
    ],
    requirements: [
      'Basic Python programming knowledge',
      'High school level mathematics',
      'Computer with internet connection',
      'Willingness to learn and practice',
    ],
    curriculum: [
      {
        title: 'Introduction to Machine Learning',
        lessons: 6,
        duration: '2 hours',
        topics: [
          'What is Machine Learning?',
          'Types of Machine Learning',
          'ML Workflow Overview',
          'Setting up Development Environment',
          'Python for ML - Quick Review',
          'Introduction to Jupyter Notebooks',
        ],
      },
      {
        title: 'Data Preprocessing',
        lessons: 8,
        duration: '3 hours',
        topics: [
          'Data Collection and Sources',
          'Exploratory Data Analysis',
          'Handling Missing Data',
          'Feature Scaling and Normalization',
          'Categorical Data Encoding',
          'Feature Selection Techniques',
          'Data Splitting Strategies',
          'Hands-on: Preprocessing Real Dataset',
        ],
      },
      {
        title: 'Supervised Learning',
        lessons: 12,
        duration: '5 hours',
        topics: [
          'Linear Regression',
          'Logistic Regression',
          'Decision Trees',
          'Random Forest',
          'Support Vector Machines',
          'k-Nearest Neighbors',
          'Naive Bayes',
          'Model Evaluation Metrics',
          'Cross-Validation',
          'Hyperparameter Tuning',
          'Overfitting and Underfitting',
          'Project: Predicting House Prices',
        ],
      },
      {
        title: 'Unsupervised Learning',
        lessons: 8,
        duration: '3 hours',
        topics: [
          'K-Means Clustering',
          'Hierarchical Clustering',
          'DBSCAN',
          'Principal Component Analysis (PCA)',
          'Association Rules',
          'Anomaly Detection',
          'Dimensionality Reduction',
          'Project: Customer Segmentation',
        ],
      },
      {
        title: 'Model Deployment',
        lessons: 6,
        duration: '2.5 hours',
        topics: [
          'Model Serialization',
          'Creating REST APIs with Flask',
          'Containerization with Docker',
          'Cloud Deployment Options',
          'Monitoring ML Models',
          'Final Project: End-to-End ML Pipeline',
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        user: 'Alex Thompson',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 5,
        date: '2024-01-10',
        comment: 'Excellent course! Dr. Johnson explains complex concepts in a very understandable way. The hands-on projects really helped solidify my understanding.',
        helpful: 24,
      },
      {
        id: 2,
        user: 'Maria Garcia',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 5,
        date: '2024-01-08',
        comment: 'This course exceeded my expectations. The curriculum is well-structured and the projects are relevant to real-world scenarios.',
        helpful: 18,
      },
      {
        id: 3,
        user: 'David Kim',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 4,
        date: '2024-01-05',
        comment: 'Great content and presentation. Would have liked more advanced topics, but perfect for beginners.',
        helpful: 12,
      },
    ],
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/courses" className="text-gray-500 hover:text-primary-600">Courses</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{course.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Link to="/courses" className="text-primary-600 hover:text-primary-700 flex items-center space-x-1">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Courses</span>
                </Link>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{course.rating}</span>
                  <span>({course.students} students)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Globe className="w-4 h-4" />
                  <span>{course.language}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Updated {new Date(course.lastUpdated).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  <Heart className="w-5 h-5" />
                  <span>Save</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Course Image */}
            <div className="mb-8">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-8">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">What you'll learn</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.whatYouWillLearn.map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
                      <ul className="space-y-2">
                        {course.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Curriculum Tab */}
                {activeTab === 'curriculum' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">Course Curriculum</h3>
                      <span className="text-sm text-gray-600">
                        {course.lessons} lessons • {course.curriculum.reduce((acc, section) => acc + parseFloat(section.duration), 0)} hours total
                      </span>
                    </div>
                    {course.curriculum.map((section, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-medium text-gray-900">{section.title}</h4>
                            <span className="text-sm text-gray-600">
                              {section.lessons} lessons • {section.duration}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-3">
                            {section.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-center space-x-3">
                                <Play className="w-4 h-4 text-primary-600" />
                                <span className="text-gray-700">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Instructor Tab */}
                {activeTab === 'instructor' && (
                  <div className="space-y-6">
                    <div className="flex items-start space-x-6">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.instructor.name}</h3>
                        <p className="text-lg text-primary-600 mb-4">{course.instructor.title}</p>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{course.instructor.rating}</div>
                            <div className="text-sm text-gray-600">Instructor Rating</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{course.instructor.students.toLocaleString()}</div>
                            <div className="text-sm text-gray-600">Students</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{course.instructor.courses}</div>
                            <div className="text-sm text-gray-600">Courses</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{course.instructor.bio}</p>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">Student Reviews</h3>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-lg font-medium">{course.rating}</span>
                        <span className="text-gray-600">({course.students} reviews)</span>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {course.reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start space-x-4">
                            <img
                              src={review.avatar}
                              alt={review.user}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h4 className="font-medium text-gray-900">{review.user}</h4>
                                <div className="flex items-center">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">
                                  {new Date(review.date).toLocaleDateString()}
                                </span>
                              </div>
                              <p className="text-gray-700 mb-3 leading-relaxed">{review.comment}</p>
                              <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-primary-600 transition-colors duration-200">
                                <ThumbsUp className="w-4 h-4" />
                                <span>Helpful ({review.helpful})</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Enrollment Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-primary-600">${course.price}</span>
                    {course.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">30-day money-back guarantee</p>
                </div>

                <button className="btn-primary w-full mb-4">
                  Enroll Now
                </button>

                <button className="btn-secondary w-full mb-6">
                  Add to Wishlist
                </button>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Lessons:</span>
                    <span className="font-medium">{course.lessons}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Projects:</span>
                    <span className="font-medium">{course.projects}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-medium">{course.language}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Certificate:</span>
                    <span className="font-medium flex items-center space-x-1">
                      <Award className="w-4 h-4 text-primary-600" />
                      <span>Yes</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Course Features */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">This course includes:</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                    <Play className="w-4 h-4 text-primary-600" />
                    <span>45 hours of video content</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Download className="w-4 h-4 text-primary-600" />
                    <span>Downloadable resources</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-primary-600" />
                    <span>Access to community</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <MessageCircle className="w-4 h-4 text-primary-600" />
                    <span>Q&A support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Award className="w-4 h-4 text-primary-600" />
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-primary-600" />
                    <span>Lifetime access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;