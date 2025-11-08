import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Clock, Sparkles } from 'lucide-react';
import type { Course } from '@shared/courses';

interface CourseCardProps {
  course: Course;
}

const colorMap: Record<string, string> = {
  red: '#ef4444',
  orange: '#f97316',
  yellow: '#eab308',
  green: '#22c55e',
  teal: '#14b8a6',
  blue: '#3b82f6',
  indigo: '#6366f1',
  violet: '#8b5cf6',
  purple: '#a855f7',
  pink: '#ec4899',
};

export default function CourseCard({ course }: CourseCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const accentColor = colorMap[course.color] || '#3b82f6';

  return (
    <Card 
      className="h-full hover-elevate active-elevate-2 transition-all duration-300 border-t-4 overflow-visible flex flex-col"
      style={{ borderTopColor: accentColor }}
      data-testid={`card-course-${course.id}`}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div 
            className="text-3xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${accentColor}20` }}
          >
            {course.icon}
          </div>
          {course.popular && (
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              Popular
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg leading-tight">{course.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{course.duration} Hours</span>
          <Badge variant="outline" className="text-xs">{course.program}</Badge>
        </div>
        <CardDescription className="text-sm leading-relaxed flex-1">
          {course.description.length > 120 
            ? `${course.description.substring(0, 120)}...` 
            : course.description}
        </CardDescription>
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              className="w-full border-0"
              style={{ 
                backgroundColor: accentColor,
                color: 'white'
              }}
              data-testid={`button-know-more-${course.id}`}
            >
              Know More
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl" data-testid={`dialog-course-${course.id}`}>
            <DialogHeader>
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="text-4xl w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${accentColor}20` }}
                >
                  {course.icon}
                </div>
                <div className="flex-1">
                  <DialogTitle className="text-2xl mb-2">{course.name}</DialogTitle>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline">{course.program}</Badge>
                    {course.track && (
                      <Badge variant="secondary">{course.track.replace(/-/g, ' ')}</Badge>
                    )}
                    <Badge variant="outline">
                      <Clock className="w-3 h-3 mr-1" />
                      {course.duration} Hours
                    </Badge>
                  </div>
                </div>
              </div>
            </DialogHeader>
            <DialogDescription className="text-base leading-relaxed">
              {course.description}
            </DialogDescription>
            <div className="mt-6 space-y-4">
              <div className="bg-muted p-4 rounded-md">
                <h4 className="font-semibold mb-2 text-foreground">Course Highlights</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Industry-recognized certification from MKCL</li>
                  <li>✓ Hands-on practical training with real-world projects</li>
                  <li>✓ Expert instructors with industry experience</li>
                  <li>✓ Job placement assistance after completion</li>
                  <li>✓ Flexible learning schedules</li>
                </ul>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Button 
                  className="flex-1 border-0"
                  style={{ backgroundColor: accentColor, color: 'white' }}
                  asChild
                  data-testid="button-enroll-course"
                >
                  <a href="tel:+916206528684">Enroll Now</a>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  asChild
                  data-testid="button-contact-course"
                >
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
