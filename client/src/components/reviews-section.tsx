import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Star, User } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import GlassCard from '@/components/ui/glass-card';
import NeonButton from '@/components/ui/neon-button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Review } from '@shared/schema';

const reviewSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  position: z.string().min(1, 'Position/Company is required'),
  rating: z.number().min(1).max(5),
  text: z.string().min(10, 'Review must be at least 10 characters'),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

export default function ReviewsSection() {
  const [selectedRating, setSelectedRating] = useState(5);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: reviews = [], isLoading } = useQuery<Review[]>({
    queryKey: ['/api/reviews']
  });

  const form = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: '',
      position: '',
      rating: 5,
      text: '',
    },
  });

  const createReviewMutation = useMutation({
    mutationFn: async (data: ReviewFormData) => {
      const response = await apiRequest('POST', '/api/reviews', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/reviews'] });
      form.reset();
      setSelectedRating(5);
      toast({
        title: "Success!",
        description: "Thank you for your review! It has been added to our testimonials.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ReviewFormData) => {
    createReviewMutation.mutate({ ...data, rating: selectedRating });
  };

  const renderStars = (rating: number, interactive = false, onStarClick?: (rating: number) => void) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-400'
        } ${interactive ? 'cursor-pointer hover:text-yellow-400 transition-colors' : ''}`}
        onClick={() => interactive && onStarClick?.(index + 1)}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-tech-dark to-tech-secondary relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-block px-4 py-2 glass-morphism rounded-full border border-tech-accent/30 mb-6">
            <span className="text-tech-accent font-semibold text-sm tracking-wider">TESTIMONIALS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="holographic-text">Client Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our clients say about their transformative experiences with TechSol's innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Reviews Display */}
          <div className="space-y-6">
            {isLoading ? (
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <GlassCard key={i} className="p-6 neon-border animate-pulse">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-600 rounded w-1/3"></div>
                        <div className="h-3 bg-gray-600 rounded w-full"></div>
                        <div className="h-3 bg-gray-600 rounded w-2/3"></div>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            ) : (
              reviews.map((review) => (
                <GlassCard key={review.id} className="p-6 neon-border scroll-reveal">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-tech-primary to-tech-accent rounded-full flex items-center justify-center">
                      <User className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-white">{review.name}</h4>
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-2">
                        "{review.text}"
                      </p>
                      <span className="text-tech-accent text-sm">{review.position}</span>
                    </div>
                  </div>
                </GlassCard>
              ))
            )}
          </div>

          {/* Review Submission Form */}
          <GlassCard className="p-8 neon-border scroll-reveal">
            <h3 className="text-3xl font-bold text-white mb-6">Share Your Experience</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-tech-accent"
                          placeholder="Enter your name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Company/Position</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-tech-accent"
                          placeholder="e.g., CEO at TechCorp"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
                  <div className="flex gap-2">
                    {renderStars(selectedRating, true, setSelectedRating)}
                  </div>
                </div>
                
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Your Review</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4}
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-tech-accent"
                          placeholder="Share your experience with TechSol..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <NeonButton 
                  type="submit" 
                  className="w-full animate-glow"
                  disabled={createReviewMutation.isPending}
                >
                  {createReviewMutation.isPending ? 'Submitting...' : 'Submit Review'}
                </NeonButton>
              </form>
            </Form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
