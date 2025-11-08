import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { allCourses, deepTracks, type Course } from '@shared/courses';
import CourseCard from '@/components/CourseCard';

export default function Courses() {
  const [selectedProgram, setSelectedProgram] = useState<'ALL' | 'DEEP' | 'KYP' | 'ADCA'>('ALL');
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');

  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchesProgram = selectedProgram === 'ALL' || course.program === selectedProgram;
      const matchesTrack = selectedTrack === 'all' || course.track === selectedTrack;
      const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDuration = selectedDuration === 'all' || 
                              course.duration === parseInt(selectedDuration);
      
      return matchesProgram && matchesTrack && matchesSearch && matchesDuration;
    });
  }, [selectedProgram, selectedTrack, searchQuery, selectedDuration]);

  const popularCourses = useMemo(() => {
    return allCourses.filter(c => c.popular);
  }, []);

  const resetFilters = () => {
    setSelectedProgram('ALL');
    setSelectedTrack('all');
    setSearchQuery('');
    setSelectedDuration('all');
  };

  const hasActiveFilters = selectedProgram !== 'ALL' || selectedTrack !== 'all' || searchQuery !== '' || selectedDuration !== 'all';

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-rainbow py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-courses-title">
            Explore Our Comprehensive Courses
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90">
            80+ DEEP Courses, KYP Programs, and ADCA Certifications
          </p>
          <p className="text-base text-white/80 max-w-3xl mx-auto">
            Build your career in Digital, Creative, IT, Management, and more domains with industry-recognized certifications
          </p>
        </motion.div>
      </section>

      {/* Program Tabs */}
      <section className="sticky top-16 z-30 bg-background border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-2 overflow-x-auto">
            {['ALL', 'DEEP', 'KYP', 'ADCA'].map((program) => (
              <Button
                key={program}
                onClick={() => {
                  setSelectedProgram(program as any);
                  setSelectedTrack('all');
                }}
                variant={selectedProgram === program ? 'default' : 'outline'}
                className={`whitespace-nowrap ${
                  selectedProgram === program 
                    ? 'bg-gradient-warm text-white border-0' 
                    : ''
                }`}
                data-testid={`button-filter-${program.toLowerCase()}`}
              >
                {program === 'ALL' ? 'All Courses' : program}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {allCourses.filter(c => program === 'ALL' || c.program === program).length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP Tracks Section (only show for DEEP program) */}
      {(selectedProgram === 'ALL' || selectedProgram === 'DEEP') && (
        <section className="max-w-7xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center" data-testid="text-deep-tracks-title">
              DEEP Skill Tracks
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {deepTracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card
                    className={`cursor-pointer hover-elevate active-elevate-2 transition-all ${
                      selectedTrack === track.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => {
                      setSelectedProgram('DEEP');
                      setSelectedTrack(selectedTrack === track.id ? 'all' : track.id);
                    }}
                    data-testid={`card-track-${track.id}`}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl mb-2">{track.icon}</div>
                      <h3 className="text-sm font-semibold text-foreground">{track.name}</h3>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {allCourses.filter(c => c.track === track.id).length} courses
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Search and Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 py-6 bg-muted/30 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search-courses"
              />
            </div>
          </div>

          {selectedProgram === 'DEEP' && (
            <Select value={selectedTrack} onValueChange={setSelectedTrack}>
              <SelectTrigger data-testid="select-track-filter">
                <SelectValue placeholder="All Tracks" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tracks</SelectItem>
                {deepTracks.map(track => (
                  <SelectItem key={track.id} value={track.id}>
                    {track.icon} {track.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          <Select value={selectedDuration} onValueChange={setSelectedDuration}>
            <SelectTrigger data-testid="select-duration-filter">
              <SelectValue placeholder="All Durations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Durations</SelectItem>
              <SelectItem value="60">60 Hours</SelectItem>
              <SelectItem value="120">120 Hours</SelectItem>
            </SelectContent>
          </Select>

          {hasActiveFilters && (
            <Button
              variant="outline"
              onClick={resetFilters}
              data-testid="button-reset-filters"
            >
              <X className="w-4 h-4 mr-2" />
              Reset
            </Button>
          )}
        </div>
      </section>

      {/* Popular Courses */}
      {selectedProgram === 'ALL' && !hasActiveFilters && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              Popular Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* All Courses Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold" data-testid="text-all-courses-title">
            {selectedProgram === 'ALL' ? 'All Courses' : `${selectedProgram} Courses`}
          </h2>
          <p className="text-muted-foreground" data-testid="text-courses-count">
            {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
          </p>
        </div>

        {filteredCourses.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
            <Button onClick={resetFilters} data-testid="button-reset-no-results">
              Reset Filters
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.05, 0.5) }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-cool py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4" data-testid="text-cta-title">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Join Digital Tech Drive and get certified from MKCL and other leading institutions
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 border-0"
              asChild
              data-testid="button-cta-contact"
            >
              <a href="tel:+916206528684">Contact Us</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
              data-testid="button-cta-ai-advisor"
            >
              <a href="#ai-assistant">Get AI Course Advice</a>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
