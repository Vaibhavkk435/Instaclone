import React, { useState, useRef } from 'react';
import Navbar from './navbar'; // Import the Navbar component
import { 
  User, 
  GraduationCap, 
  FileText, 
  BarChart2, 
  Settings, 
  HelpCircle,
  Upload,
  File,
  Trash2
} from 'lucide-react';

// Simulated student data and assignments
const initialStudents = [
  {
    id: 1,
    name: "Emily Rodriguez",
    subject: "Mathematics",
    recentAssignment: "Algebra Quiz",
    score: 85,
    feedback: "Strong algebraic reasoning, needs improvement in complex equation solving.",
    progressTrend: [75, 80, 85, 88],
    assignments: []
  },
  {
    id: 2,
    name: "Raj Patel",
    subject: "Computer Science",
    recentAssignment: "Python Programming",
    score: 92,
    feedback: "Excellent problem-solving skills, demonstrates strong coding logic.",
    progressTrend: [80, 85, 90, 92],
    assignments: []
  }
];

const PFESDashboard = () => {
  const [students, setStudents] = useState(initialStudents);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    if (!selectedStudent) {
      alert('Please select a student first');
      return;
    }

    const files = event.target.files;
    const newAssignments = Array.from(files).map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      type: file.type,
      size: file.size,
      uploadDate: new Date()
    }));

    setStudents(prevStudents => 
      prevStudents.map(student => 
        student.id === selectedStudent.id 
          ? {...student, assignments: [...student.assignments, ...newAssignments]} 
          : student
      )
    );

    // Update selected student to reflect new assignments
    setSelectedStudent(prevStudent => 
      prevStudent 
        ? {...prevStudent, assignments: [...prevStudent.assignments, ...newAssignments]} 
        : null
    );
  };

  const handleDeleteAssignment = (assignmentId) => {
    setStudents(prevStudents => 
      prevStudents.map(student => 
        student.id === selectedStudent.id 
          ? {...student, assignments: student.assignments.filter(a => a.id !== assignmentId)} 
          : student
      )
    );

    // Update selected student
    setSelectedStudent(prevStudent => 
      prevStudent 
        ? {...prevStudent, assignments: prevStudent.assignments.filter(a => a.id !== assignmentId)} 
        : null
    );
  };

  const renderStudentCard = (student) => (
    <div 
      key={student.id} 
      className={`p-4 border rounded-lg mb-3 cursor-pointer transition-all 
        ${selectedStudent?.id === student.id 
          ? 'border-indigo-500 bg-indigo-50 shadow-md' 
          : 'hover:bg-blue-50 hover:border-blue-200 bg-white'}`}
      onClick={() => setSelectedStudent(student)}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg text-gray-800">{student.name}</h3>
          <p className="text-sm text-gray-600">{student.subject}</p>
        </div>
        <div className="text-right">
          <span className={`font-semibold text-xl 
            ${student.score >= 90 ? 'text-green-600' : 
              student.score >= 80 ? 'text-blue-600' : 'text-yellow-600'}`}
          >
            {student.score}%
          </span>
          <p className="text-xs text-gray-500">{student.recentAssignment}</p>
        </div>
      </div>
    </div>
  );

  const renderStudentDetails = () => {
    if (!selectedStudent) return null;

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{selectedStudent.name}</h2>
          <span className="text-xl font-semibold text-blue-600">{selectedStudent.score}%</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Recent Performance</h3>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm">{selectedStudent.feedback}</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Progress Trend</h3>
            <div className="flex items-end h-24 bg-gray-100 p-3 rounded-lg">
              {selectedStudent.progressTrend.map((score, index) => (
                <div 
                  key={index} 
                  className="w-8 mx-1 bg-blue-500"
                  style={{height: `${score}%`}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAssignmentUpload = () => {
    if (!selectedStudent) {
      return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-500">Select a student to upload assignments</p>
        </div>
      );
    }

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Upload Assignments for {selectedStudent.name}</h2>
        </div>

        <div className="mb-4">
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileUpload}
            multiple 
            className="hidden" 
            accept=".pdf,.doc,.docx,.txt,.jpg,.png"
          />
          <button 
            onClick={() => fileInputRef.current.click()}
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center"
          >
            <Upload className="mr-2" /> Upload Assignments
          </button>
        </div>

        {selectedStudent.assignments && selectedStudent.assignments.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Uploaded Assignments</h3>
            <div className="space-y-2">
              {selectedStudent.assignments.map((assignment) => (
                <div 
                  key={assignment.id} 
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
                >
                  <div className="flex items-center">
                    <File className="mr-2 text-blue-500" />
                    <div>
                      <p className="text-sm font-medium">{assignment.name}</p>
                      <p className="text-xs text-gray-500">
                        {(assignment.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDeleteAssignment(assignment.id)}
                    className="text-red-500 hover:bg-red-100 p-2 rounded-full"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 p-6">
      <Navbar /> {/* Include the Navbar component */}
      <div className="container mx-auto mt-16">
        <header className="flex justify-between items-center mb-6 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Personalized Feedback Enhancement System
          </h1>
          <div className="flex space-x-4">
            <button className="p-2 hover:bg-blue-100 rounded-full transition-colors">
              <Settings className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-blue-100 rounded-full transition-colors">
              <HelpCircle className="text-gray-600" />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-6">
          {/* Sidebar: Student List */}
          <div className="col-span-1 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
              <GraduationCap className="mr-2 text-indigo-600" /> Student List
            </h2>
            {students.map(renderStudentCard)}
          </div>

          {/* Main Content: Student Details or Assignment Upload */}
          <div className="col-span-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md">
            <div className="flex mb-4 border-b px-4 pt-4">
              <button 
                className={`px-4 py-2 transition-colors ${activeTab === 'details' 
                  ? 'border-b-2 border-indigo-500 text-indigo-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('details')}
              >
                Student Details
              </button>
              <button 
                className={`px-4 py-2 transition-colors ${activeTab === 'upload' 
                  ? 'border-b-2 border-indigo-500 text-indigo-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('upload')}
              >
                Upload Assignments
              </button>
            </div>

            <div className="p-4">
              {activeTab === 'details' ? renderStudentDetails() : renderAssignmentUpload()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PFESDashboard;