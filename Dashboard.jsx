import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  BarChart3, Package, Settings, DollarSign, Users, Clock, 
  Plus, Edit, Trash, ChevronDown 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Dashboard Component
const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  
  // Sample data for charts
  const revenueData = [
    { name: 'Jan', value: 2400 },
    { name: 'Feb', value: 1398 },
    { name: 'Mar', value: 9800 },
    { name: 'Apr', value: 3908 },
    { name: 'May', value: 4800 },
    { name: 'Jun', value: 3800 },
  ];

  const activeAuctions = [
    {
      id: 1,
      title: "Vintage Camera",
      currentBid: 250,
      endTime: "2024-02-23 15:00",
      totalBids: 12,
      watchers: 24,
      status: "active"
    },
    {
      id: 2,
      title: "Antique Watch",
      currentBid: 1500,
      endTime: "2024-02-24 12:00",
      totalBids: 8,
      watchers: 45,
      status: "ending-soon"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold">$24,500</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Active Auctions</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Bidders</p>
              <p className="text-2xl font-bold">156</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-orange-100 p-3 rounded-lg">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Avg. Bids/Item</p>
              <p className="text-2xl font-bold">8.3</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Active Auctions Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Active Auctions</CardTitle>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            New Auction
          </button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6">Title</th>
                  <th className="text-left py-4 px-6">Current Bid</th>
                  <th className="text-left py-4 px-6">End Time</th>
                  <th className="text-left py-4 px-6">Total Bids</th>
                  <th className="text-left py-4 px-6">Watchers</th>
                  <th className="text-left py-4 px-6">Status</th>
                  <th className="text-left py-4 px-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {activeAuctions.map((auction) => (
                  <tr key={auction.id} className="border-b">
                    <td className="py-4 px-6">{auction.title}</td>
                    <td className="py-4 px-6">${auction.currentBid}</td>
                    <td className="py-4 px-6">{auction.endTime}</td>
                    <td className="py-4 px-6">{auction.totalBids}</td>
                    <td className="py-4 px-6">{auction.watchers}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        auction.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {auction.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Trash className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Auction Settings Component
const AuctionSettings = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Create New Auction</h1>
      </div>

      <Card>
        <CardContent className="p-6">
          <form className="space-y-6">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Item Title
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter item title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-lg h-32"
                    placeholder="Enter item description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Category
                  </label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Select category</option>
                    <option>Electronics</option>
                    <option>Collectibles</option>
                    <option>Art</option>
                    <option>Fashion</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Pricing</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Starting Price
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-lg"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Reserve Price (Optional)
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-lg"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Minimum Bid Increment
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-lg"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            {/* Duration */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Duration</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Start Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    End Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Images */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Images</h2>
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <div className="flex flex-col items-center">
                  <Package className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-gray-600">
                    Drag and drop images here, or click to select files
                  </p>
                  <button className="mt-4 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                    Select Files
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex justify-end space-x-4">
              <button className="px-6 py-2 border rounded-lg hover:bg-gray-100">
                Save as Draft
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Publish Auction
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export { Dashboard, AuctionSettings };
