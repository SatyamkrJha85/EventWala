# EventWala - All-in-One Event Management Platform

EventWala is a comprehensive event management platform designed specifically for Indian celebrations and ceremonies. From traditional weddings to modern festivals, EventWala provides everything you need to plan and execute your perfect event.

## 🎉 Features

### Core Features
- **Event Categories**: Marriage, Diwali, Ganesh Puja, Birthday, Housewarming, and more
- **Sub-Event Management**: Detailed planning for specific ceremonies (Haldi, Sagun, Reception, etc.)
- **Customizable Packages**: Build your perfect event package with flexible options
- **Venue Finder**: Discover and book the perfect venue for your celebration
- **Vendor Directory**: Connect with trusted professionals for every service
- **Event Planner**: Step-by-step planning tools with budget calculator and timeline management

### Event Planning Tools
- **Step-by-Step Planning**: 5 comprehensive planning stages
- **Budget Calculator**: Track estimated vs. actual costs with visual indicators
- **Timeline Management**: Create detailed event schedules
- **Task Management**: Organize and track planning tasks
- **Progress Tracking**: Visual progress indicators for each planning stage

### User Experience
- **Responsive Design**: Mobile-first approach for all devices
- **Modern UI/UX**: Clean, colorful, and celebratory design
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Search & Filters**: Advanced search and filtering capabilities
- **Wishlist Management**: Save favorite packages and venues

## 🚀 Technology Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React for consistent iconography
- **State Management**: React hooks for local state
- **Responsive Design**: Mobile-first responsive layout
- **Performance**: Optimized for fast loading and smooth interactions

## 📱 Pages & Routes

### Main Pages
- **Homepage** (`/`): Landing page with hero section, features, and testimonials
- **Events** (`/events`): Browse all event categories
- **Event Category** (`/events/[categoryId]`): View specific event types
- **Sub-Event** (`/events/[categoryId]/[subEventId]`): Browse packages for specific ceremonies
- **Venues** (`/venues`): Search and filter venues
- **Vendors** (`/vendors`): Browse service providers
- **Event Planner** (`/planner`): Planning tools and budget calculator
- **Packages** (`/packages`): View all available packages

### Components
- **Navbar**: Responsive navigation with search functionality
- **Footer**: Comprehensive footer with links and contact information
- **Event Cards**: Interactive cards for events, venues, and packages
- **Search & Filters**: Advanced filtering for venues and vendors
- **Budget Calculator**: Interactive budget management tool
- **Timeline Builder**: Event schedule creation tool

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#f97316) to Red (#dc2626) gradient
- **Secondary**: Yellow (#eab308) accents
- **Neutral**: Gray scale for text and backgrounds
- **Success**: Green (#22c55e) for positive actions
- **Warning**: Orange (#f97316) for alerts

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body Text**: Regular weight for readability
- **Accent Text**: Gradient text effects for branding

### Components
- **Cards**: Rounded corners with shadows and hover effects
- **Buttons**: Gradient backgrounds with hover animations
- **Forms**: Clean input fields with focus states
- **Navigation**: Sticky header with mobile menu

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Quick Start
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eventwala
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

## 📊 Data Structure

### Event Categories
```typescript
interface EventCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  subEvents: SubEvent[];
}
```

### Packages
```typescript
interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  items: PackageItem[];
  image: string;
  category: string;
}
```

### Venues
```typescript
interface Venue {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  price: number;
  capacity: number;
  amenities: string[];
  rating: number;
  reviews: Review[];
}
```

## 🔧 Customization

### Adding New Event Types
1. Update `src/data/events.ts` with new event data
2. Add corresponding images to the public folder
3. Update navigation and routing as needed

### Modifying Styles
1. Edit `src/app/globals.css` for global styles
2. Use Tailwind CSS classes for component styling
3. Customize color scheme in Tailwind config

### Adding New Features
1. Create new components in `src/components/`
2. Add new pages in `src/app/`
3. Update types in `src/types/index.ts`

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Collapsible navigation menu
- Touch-friendly buttons and interactions
- Optimized layouts for small screens
- Swipe gestures for mobile users

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load only when needed
- **CSS Optimization**: Tailwind CSS purging for production
- **Bundle Analysis**: Built-in bundle analyzer

## 🔒 Security Features

- **Type Safety**: Full TypeScript implementation
- **Input Validation**: Form validation and sanitization
- **XSS Protection**: Built-in Next.js security features
- **CSRF Protection**: Form submission security

## 📈 Analytics & Monitoring

### Built-in Features
- **Performance Monitoring**: Core Web Vitals tracking
- **Error Tracking**: Automatic error logging
- **User Analytics**: Page view and interaction tracking

### Integration Options
- Google Analytics
- Hotjar for user behavior
- Sentry for error monitoring
- Custom analytics solutions

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Standards
- Follow TypeScript best practices
- Use consistent naming conventions
- Maintain responsive design principles
- Write clear component documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

### Getting Help
- **Documentation**: Check this README and code comments
- **Issues**: Report bugs via GitHub issues
- **Discussions**: Use GitHub discussions for questions
- **Email**: Contact support@eventwala.com

### Common Issues
- **Build Errors**: Ensure Node.js version compatibility
- **Styling Issues**: Check Tailwind CSS configuration
- **Routing Problems**: Verify Next.js app router setup
- **Performance**: Use Next.js built-in optimization tools

## 🎯 Roadmap

### Upcoming Features
- **User Authentication**: Login and registration system
- **Booking System**: Online venue and vendor booking
- **Payment Integration**: Secure payment processing
- **Real-time Chat**: Customer support chat system
- **Mobile App**: React Native mobile application
- **AI Recommendations**: Smart package suggestions
- **Multi-language Support**: Hindi and regional languages

### Future Enhancements
- **Virtual Venue Tours**: 3D venue exploration
- **Social Features**: Event sharing and collaboration
- **Advanced Analytics**: Detailed event insights
- **Integration APIs**: Third-party service connections
- **Blockchain**: Secure contract management

## 🙏 Acknowledgments

- **Design Inspiration**: Modern Indian event planning websites
- **Icons**: Lucide React icon library
- **UI Framework**: Tailwind CSS for styling
- **Framework**: Next.js for the application foundation
- **Community**: Open source contributors and supporters

---

**EventWala** - Making every celebration unforgettable! 🎉✨

For more information, visit [www.eventwala.com](https://www.eventwala.com)
