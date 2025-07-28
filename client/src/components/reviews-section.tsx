import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Star, User } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
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
  const [showReviewForm, setShowReviewForm] = useState(false);
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
      setShowReviewForm(false);
      toast({
        title: "Success!",
        description: "Thank you for your review! It has been added to our testimonials.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: ReviewFormData) => {
    createReviewMutation.mutate({
      ...data,
      rating: selectedRating
    });
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                What Our Happy<br/>
                Students Says
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Build skills with our courses and mentor from world-class companies.
              </p>
            </div>
            <div className="hidden md:block">
              <button 
                onClick={() => setShowReviewForm(true)}
                className="px-6 py-3 border border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 rounded-lg font-semibold"
              >
                Give Your Review
              </button>
            </div>
          </div>
          
          {/* Mobile "Give Your Review" button */}
          <div className="md:hidden text-center mb-8">
            <button 
              onClick={() => setShowReviewForm(true)}
              className="px-6 py-3 border border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 rounded-lg font-semibold"
            >
              Give Your Review
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Reviews Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.position}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          {/* Review Form */}
          {showReviewForm && (
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Share Your Experience</h3>
                <button 
                  onClick={() => setShowReviewForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ×
                </button>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your name" 
                            {...field} 
                            className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
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
                        <FormLabel className="text-gray-900">Position/Company</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., Full-Stack Web Developer" 
                            {...field} 
                            className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Rating</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setSelectedRating(star)}
                          className="focus:outline-none"
                        >
                          <Star 
                            className={`w-6 h-6 ${star <= selectedRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900">Your Review</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Share your experience with our courses..." 
                            rows={4} 
                            {...field}
                            className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={createReviewMutation.isPending}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {createReviewMutation.isPending ? 'Submitting...' : 'Submit Review'}
                  </button>
                </form>
              </Form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}