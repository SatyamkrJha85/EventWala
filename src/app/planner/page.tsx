'use client';

import { useState } from 'react';
import { Calendar, Users, MapPin, DollarSign, CheckCircle, Circle, ArrowRight, ArrowLeft, Plus, Minus, Clock, Target, TrendingUp, Save, Download, Share2 } from 'lucide-react';

interface PlanningStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  tasks: PlanningTask[];
}

interface PlanningTask {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string;
  assignedTo: string;
  budget: number;
}

interface BudgetItem {
  id: string;
  category: string;
  item: string;
  estimatedCost: number;
  actualCost: number;
  notes: string;
}

interface TimelineItem {
  id: string;
  time: string;
  activity: string;
  duration: string;
  responsible: string;
}

export default function EventPlannerPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [eventDetails, setEventDetails] = useState({
    eventType: '',
    date: '',
    guestCount: 0,
    budget: 0,
    location: ''
  });
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  const [newBudgetItem, setNewBudgetItem] = useState({
    category: '',
    item: '',
    estimatedCost: 0,
    actualCost: 0,
    notes: ''
  });
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([]);
  const [newTimelineItem, setNewTimelineItem] = useState({
    time: '',
    activity: '',
    duration: '',
    responsible: ''
  });

  const planningSteps: PlanningStep[] = [
    {
      id: '1',
      title: 'Event Basics',
      description: 'Define your event type, date, and basic details',
      completed: false,
      tasks: [
        { id: '1-1', title: 'Choose event type', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '1-2', title: 'Set event date', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '1-3', title: 'Determine guest count', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '1-4', title: 'Set overall budget', completed: false, dueDate: '', assignedTo: '', budget: 0 }
      ]
    },
    {
      id: '2',
      title: 'Venue & Location',
      description: 'Find and book your perfect venue',
      completed: false,
      tasks: [
        { id: '2-1', title: 'Research venues', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '2-2', title: 'Visit shortlisted venues', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '2-3', title: 'Book venue', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '2-4', title: 'Sign contracts', completed: false, dueDate: '', assignedTo: '', budget: 0 }
      ]
    },
    {
      id: '3',
      title: 'Vendors & Services',
      description: 'Hire vendors for catering, decoration, photography, etc.',
      completed: false,
      tasks: [
        { id: '3-1', title: 'Research vendors', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '3-2', title: 'Get quotes', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '3-3', title: 'Book vendors', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '3-4', title: 'Confirm details', completed: false, dueDate: '', assignedTo: '', budget: 0 }
      ]
    },
    {
      id: '4',
      title: 'Decoration & Theme',
      description: 'Plan your event decoration and theme',
      completed: false,
      tasks: [
        { id: '4-1', title: 'Choose theme', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '4-2', title: 'Plan decorations', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '4-3', title: 'Order supplies', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '4-4', title: 'Setup plan', completed: false, dueDate: '', assignedTo: '', budget: 0 }
      ]
    },
    {
      id: '5',
      title: 'Final Preparations',
      description: 'Last-minute details and confirmations',
      completed: false,
      tasks: [
        { id: '5-1', title: 'Final vendor meetings', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '5-2', title: 'Create timeline', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '5-3', title: 'Prepare emergency contacts', completed: false, dueDate: '', assignedTo: '', budget: 0 },
        { id: '5-4', title: 'Final walkthrough', completed: false, dueDate: '', assignedTo: '', budget: 0 }
      ]
    }
  ];

  const budgetCategories = [
    'Venue',
    'Catering',
    'Decoration',
    'Photography',
    'Entertainment',
    'Transportation',
    'Attire',
    'Gifts',
    'Miscellaneous'
  ];

  const quickTips = [
    'Start planning at least 6 months in advance for weddings',
    'Always have a backup plan for outdoor events',
    'Negotiate with vendors for better rates',
    'Keep track of all payments and contracts',
    'Plan for 10% extra budget for unexpected expenses'
  ];

  const handleNextStep = () => {
    if (currentStep < planningSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleTaskCompletion = (stepId: string, taskId: string) => {
    // Implementation for toggling task completion
  };

  const addBudgetItem = () => {
    if (newBudgetItem.category && newBudgetItem.item && newBudgetItem.estimatedCost > 0) {
      setBudgetItems([...budgetItems, { ...newBudgetItem, id: Date.now().toString() }]);
      setNewBudgetItem({ category: '', item: '', estimatedCost: 0, actualCost: 0, notes: '' });
    }
  };

  const removeBudgetItem = (id: string) => {
    setBudgetItems(budgetItems.filter(item => item.id !== id));
  };

  const addTimelineItem = () => {
    if (newTimelineItem.time && newTimelineItem.activity && newTimelineItem.duration) {
      setTimelineItems([...timelineItems, { ...newTimelineItem, id: Date.now().toString() }]);
      setNewTimelineItem({ time: '', activity: '', duration: '', responsible: '' });
    }
  };

  const removeTimelineItem = (id: string) => {
    setTimelineItems(timelineItems.filter(item => item.id !== id));
  };

  const totalEstimatedBudget = budgetItems.reduce((sum, item) => sum + item.estimatedCost, 0);
  const totalActualBudget = budgetItems.reduce((sum, item) => sum + item.actualCost, 0);
  const budgetRemaining = eventDetails.budget - totalActualBudget;
  const budgetUtilization = eventDetails.budget > 0 ? (totalActualBudget / eventDetails.budget) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Event Planner
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Plan your perfect event step by step with our comprehensive planning tools and expert guidance
          </p>
        </div>
      </section>

      {/* Planning Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step Progress */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Planning Progress</h2>
              <div className="text-gray-600">
                Step {currentStep + 1} of {planningSteps.length}
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mb-8 overflow-x-auto">
              {planningSteps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= currentStep 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {index < currentStep ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <span className="font-semibold">{index + 1}</span>
                    )}
                  </div>
                  {index < planningSteps.length - 1 && (
                    <div className={`w-16 h-1 ${
                      index < currentStep ? 'bg-orange-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Current Step Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {planningSteps[currentStep].title}
                </h3>
                <p className="text-gray-600">
                  {planningSteps[currentStep].description}
                </p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handlePrevStep}
                  disabled={currentStep === 0}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={currentStep === planningSteps.length - 1}
                  className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tasks List */}
            <div className="space-y-4">
              {planningSteps[currentStep].tasks.map((task) => (
                <div key={task.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <button
                    onClick={() => toggleTaskCompletion(planningSteps[currentStep].id, task.id)}
                    className="text-2xl text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {task.completed ? <CheckCircle className="text-green-500" /> : <Circle />}
                  </button>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{task.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <span>Due: {task.dueDate || 'Not set'}</span>
                      <span>Assigned: {task.assignedTo || 'Not assigned'}</span>
                      <span>Budget: ₹{task.budget.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Budget Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Budget Calculator</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Budget Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Budget Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Budget:</span>
                    <span className="font-bold text-gray-900">₹{eventDetails.budget.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Cost:</span>
                    <span className="font-bold text-orange-600">₹{totalEstimatedBudget.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Actual Cost:</span>
                    <span className="font-bold text-red-600">₹{totalActualBudget.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Remaining:</span>
                      <span className={`font-bold ${budgetRemaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{budgetRemaining.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Budget Utilization Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Budget Utilization</span>
                      <span>{budgetUtilization.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          budgetUtilization > 90 ? 'bg-red-500' : 
                          budgetUtilization > 75 ? 'bg-orange-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${Math.min(budgetUtilization, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="bg-blue-50 rounded-2xl p-6 mt-6">
                <h4 className="font-semibold text-blue-900 mb-3">💡 Quick Tips</h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  {quickTips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Add Budget Item */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Add Budget Item</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <select
                    value={newBudgetItem.category}
                    onChange={(e) => setNewBudgetItem({...newBudgetItem, category: e.target.value})}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select Category</option>
                    {budgetCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  
                  <input
                    type="text"
                    placeholder="Item description"
                    value={newBudgetItem.item}
                    onChange={(e) => setNewBudgetItem({...newBudgetItem, item: e.target.value})}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  
                  <input
                    type="number"
                    placeholder="Estimated cost"
                    value={newBudgetItem.estimatedCost || ''}
                    onChange={(e) => setNewBudgetItem({...newBudgetItem, estimatedCost: Number(e.target.value)})}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  
                  <input
                    type="number"
                    placeholder="Actual cost (optional)"
                    value={newBudgetItem.actualCost || ''}
                    onChange={(e) => setNewBudgetItem({...newBudgetItem, actualCost: Number(e.target.value)})}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <textarea
                  placeholder="Notes (optional)"
                  value={newBudgetItem.notes}
                  onChange={(e) => setNewBudgetItem({...newBudgetItem, notes: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
                  rows={3}
                />
                
                <button
                  onClick={addBudgetItem}
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Item</span>
                </button>
              </div>

              {/* Budget Items List */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Budget Items</h3>
                
                {budgetItems.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No budget items added yet</p>
                ) : (
                  <div className="space-y-4">
                    {budgetItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                              {item.category}
                            </span>
                            <span className="font-medium text-gray-900">{item.item}</span>
                          </div>
                          {item.notes && (
                            <p className="text-sm text-gray-600 mt-1">{item.notes}</p>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-sm text-gray-500">Estimated</div>
                            <div className="font-semibold text-orange-600">₹{item.estimatedCost.toLocaleString()}</div>
                          </div>
                          {item.actualCost > 0 && (
                            <div className="text-right">
                              <div className="text-sm text-gray-500">Actual</div>
                              <div className="font-semibold text-red-600">₹{item.actualCost.toLocaleString()}</div>
                            </div>
                          )}
                          <button
                            onClick={() => removeBudgetItem(item.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Timeline */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Event Timeline</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Add Timeline Item */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Add Timeline Item</h3>
              
              <div className="space-y-4">
                <input
                  type="time"
                  value={newTimelineItem.time}
                  onChange={(e) => setNewTimelineItem({...newTimelineItem, time: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                
                <input
                  type="text"
                  placeholder="Activity description"
                  value={newTimelineItem.activity}
                  onChange={(e) => setNewTimelineItem({...newTimelineItem, activity: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Duration (e.g., 30 min)"
                    value={newTimelineItem.duration}
                    onChange={(e) => setNewTimelineItem({...newTimelineItem, duration: e.target.value})}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  
                  <input
                    type="text"
                    placeholder="Responsible person"
                    value={newTimelineItem.responsible}
                    onChange={(e) => setNewTimelineItem({...newTimelineItem, responsible: e.target.value})}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <button
                  onClick={addTimelineItem}
                  className="w-full bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Timeline</span>
                </button>
              </div>
            </div>

            {/* Timeline Display */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Schedule</h3>
              
              {timelineItems.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No timeline items added yet</p>
              ) : (
                <div className="space-y-4">
                  {timelineItems
                    .sort((a, b) => a.time.localeCompare(b.time))
                    .map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="text-center min-w-[80px]">
                        <div className="font-bold text-orange-600">{item.time}</div>
                        <div className="text-sm text-gray-500">{item.duration}</div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{item.activity}</div>
                        <div className="text-sm text-gray-600">Responsible: {item.responsible}</div>
                      </div>
                      
                      <button
                        onClick={() => removeTimelineItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Save & Share Your Plan</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Save Plan</span>
            </button>
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export PDF</span>
            </button>
            
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2">
              <Share2 className="w-4 h-4" />
              <span>Share Plan</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help with Planning?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Our event planning experts can guide you through every step and help you create the perfect celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors">
              Get Expert Help
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
              Download Planning Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
