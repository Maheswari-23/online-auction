import React, { useState } from 'react';
import { 
  Upload, Camera, DollarSign, Calendar, ChevronRight, 
  Info, CheckCircle, AlertCircle, Image as ImageIcon
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Step indicator component
const StepIndicator = ({ currentStep, steps }) => (
  <div className="flex items-center justify-center mb-8">
    {steps.map((step, index) => (
      <div key={index} className="flex items-center">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full 
          ${currentStep > index 
            ? 'bg-green-500 text-white' 
            : currentStep === index 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200'}`}>
          {currentStep > index ? <CheckCircle className="w-5 h-5" /> : index + 1}
        </div>
        {index < steps.length - 1 && (
          <div className={`w-20 h-1 mx-2 
            ${currentStep > index ? 'bg-green-500' : 'bg-gray-200'}`} />
        )}
      </div>
    ))}
  </div>
);

// Auction Upload Page
const AuctionUpload = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [images, setImages] = useState([]);
  
  const steps = [
    'Item Details',
    'Images',
    'Pricing',
    'Schedule',
    'Review'
  ];

  const handleImageDrop = (e) => {
    e.preventDefault();
    // Handle image upload logic
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Upload New Auction</h1>
      
      <StepIndicator currentStep={currentStep} steps={steps} />

      <Card>
        <CardContent className="p-6">
          {currentStep === 0 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Item Details</h2>
              
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter item title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>Select a category</option>
                  <option>Antiques</option>
                  <option>Art</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Condition</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>Select condition</option>
                  <option>New</option>
                  <option>Like New</option>
                  <option>Used - Excellent</option>
                  <option>Used - Good</option>
                  <option>Used - Fair</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  className="w-full p-2 border rounded-lg h-32"
                  placeholder="Describe your item in detail..."
                />
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Upload Images</h2>
              
              <div
                className="border-2 border-dashed rounded-lg p-8"
                onDrop={handleImageDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                <div className="flex flex-col items-center">
                  <ImageIcon className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-gray-600 text-center mb-4">
                    Drag and drop your images here, or click to browse
                  </p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    Browse Files
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {/* Image preview thumbnails would go here */}
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <Camera className="w-8 h-8 text-gray-400" />
                </div>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Upload at least 3 images. First image will be the main photo.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Pricing Details</h2>
              
              <div>
                <label className="block text-sm font-medium mb-2">Starting Price</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    className="w-full pl-10 p-2 border rounded-lg"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Reserve Price (Optional)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    className="w-full pl-10 p-2 border rounded-lg"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Bid Increment</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    className="w-full pl-10 p-2 border rounded-lg"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-gray-600">
                  Allow buyers to submit offers below the starting price
                </label>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Schedule Auction</h2>
              
              <div>
                <label className="block text-sm font-medium mb-2">Start Date & Time</label>
                <input
                  type="datetime-local"
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Duration</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>1 day</option>
                  <option>3 days</option>
                  <option>5 days</option>
                  <option>7 days</option>
                  <option>10 days</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Time Zone</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>Eastern Time (ET)</option>
                  <option>Pacific Time (PT)</option>
                  <option>Central Time (CT)</option>
                  <option>Mountain Time (MT)</option>
                </select>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Auctions must be scheduled at least 1 hour in advance.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Review Your Auction</h2>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Item Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Title</p>
                      <p>Vintage Camera</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Category</p>
                      <p>Electronics</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Pricing</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Starting Price</p>
                      <p>$100.00</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Reserve Price</p>
                      <p>$150.00</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Schedule</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Start Date</p>
                      <p>Feb 23, 2024 15:00</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Duration</p>
                      <p>7 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              className={`px-6 py-2 border rounded-lg hover:bg-gray-100 
                ${currentStep === 0 ? 'invisible' : ''}`}
            >
              Previous
            </button>
            
            <button
              onClick={() => {
                if (currentStep === steps.length - 1) {
                  // Submit form
                } else {
                  setCurrentStep(Math.min(steps.length - 1, currentStep + 1));
                }
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {currentStep === steps.length - 1 ? 'Submit Auction' : 'Next'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Preview Page
const AuctionPreview = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Preview Auction</h1>
        <div className="space-x-4">
          <button className="px-6 py-2 border rounded-lg hover:bg-gray-100">
            Edit
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Publish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src="/api/placeholder/600/400"
            alt="Item preview"
            className="w-full rounded-lg mb-4"
          />
          <div className="grid grid-cols-4 gap-2">
            <img
              src="/api/placeholder/150/150"
              alt="Thumbnail"
              className="w-full rounded-lg"
            />
            <img
              src="/api/placeholder/150/150"
              alt="Thumbnail"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Vintage Camera</h2>
            <p className="text-gray-600">
              Classic 1960s film camera in excellent condition...
            </p>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Starting Price</span>
              <span className="font-bold">$100.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Reserve Price</span>
              <span className="font-bold">$150.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration</span>
              <span className="font-bold">7 days</span>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              This is a preview. The auction is not yet live.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export { AuctionUpload, AuctionPreview };
