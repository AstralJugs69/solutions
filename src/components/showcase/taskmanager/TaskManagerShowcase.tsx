import React from 'react';
import { FiPlusCircle, FiList, FiAlertTriangle, FiCheckSquare, FiClipboard, FiPlay, FiCheck } from 'react-icons/fi';

// Helper for Summary Card
interface SummaryCardProps {
  title: string;
  count: number | string;
  icon: React.ReactNode;
}
const SummaryCard: React.FC<SummaryCardProps> = ({ title, count, icon }) => (
  <div className="p-6 rounded-lg shadow-lg flex items-center space-x-4" style={{ backgroundColor: '#0e7490' /* secondary */ }}>
    <div className="p-3 rounded-full" style={{ backgroundColor: '#164e63' /* main background */, color: '#67e8f9' /* primary */}}>
      {icon}
    </div>
    <div>
      <p className="text-sm font-sans opacity-80">{title}</p>
      <p className="text-2xl font-display font-bold">{count}</p>
    </div>
  </div>
);

// Helper for Kanban Task Card
interface TaskCardProps {
  id: string;
  title: string;
  dueDate?: string;
  assignees?: { id: string; avatarUrl?: string; initials: string }[];
  tags?: { id: string; name: string; color: string }[];
}
const KanbanTaskCard: React.FC<TaskCardProps> = ({ title, dueDate, assignees, tags }) => (
  <div
    className="p-3 mb-3 rounded-md shadow-lg hover:shadow-xl cursor-grab transition-shadow duration-200 border"
    style={{ backgroundColor: '#0e7490', borderColor: '#22d3ee' /* accent for border */ }} // Card bg slightly darker than column for depth
  >
    <h4 className="text-sm font-sans font-medium mb-2" style={{color: '#f0f9ff'}}>{title}</h4>
    {dueDate && (
      <p className="text-xs font-sans mb-2" style={{color: '#f0f9ff', opacity: 0.7}}>
        <FiCalendar className="inline mr-1 mb-0.5" /> Due: {dueDate}
      </p>
    )}
    {tags && tags.length > 0 && (
      <div className="flex flex-wrap gap-1 mb-2">
        {tags.map(tag => (
          <span
            key={tag.id}
            className="px-2 py-0.5 text-xs rounded-full"
            style={{ backgroundColor: tag.color, color: '#164e63' /* Dark text for light tag bg */}}
          >
            {tag.name}
          </span>
        ))}
      </div>
    )}
    {assignees && assignees.length > 0 && (
      <div className="flex items-center space-x-1">
        {assignees.map(assignee => (
          assignee.avatarUrl ? (
            <img key={assignee.id} src={assignee.avatarUrl} alt={assignee.initials} className="w-5 h-5 rounded-full border" style={{borderColor: '#67e8f9'}} />
          ) : (
            <span key={assignee.id} className="flex items-center justify-center w-5 h-5 text-xs rounded-full" style={{backgroundColor: '#67e8f9', color: '#164e63'}}>
              {assignee.initials}
            </span>
          )
        ))}
      </div>
    )}
  </div>
);

const TaskManagerShowcase: React.FC = () => {
  const summaryTasks = [
    { id: 's1', title: 'My Active Tasks', count: 5, icon: <FiList className="w-6 h-6" /> },
    { id: 's2', title: 'Due Soon (Next 7 Days)', count: 2, icon: <FiAlertTriangle className="w-6 h-6" /> },
    { id: 's3', title: 'Recently Completed', count: 8, icon: <FiCheckSquare className="w-6 h-6" /> },
  ];

  const kanbanColumns = [
    {
      id: 'todo',
      title: 'To Do',
      tasks: [
        {id: 't1', title: 'Design homepage mockups', dueDate: 'Oct 26', assignees: [{id: 'u1', initials: 'AJ'}], tags: [{id: 'tag1', name: 'UI Design', color: '#67e8f9'}]},
        {id: 't2', title: 'Develop API endpoints for user auth', dueDate: 'Oct 28', assignees: [{id: 'u2', initials: 'SA'}], tags: [{id: 'tag2', name: 'Backend', color: '#a3e635'}]},
        {id: 't6', title: 'Write documentation for setup', dueDate: 'Nov 02', assignees: [{id: 'u1', initials: 'AJ'}], tags: [{id: 'tag3', name: 'Docs', color: '#FFC107'}]}
      ]
    },
    {
      id: 'inprogress',
      title: 'In Progress',
      tasks: [
        {id: 't3', title: 'Implement user authentication flow', dueDate: 'Oct 30', assignees: [{id: 'u2', initials: 'SA'}, {id: 'u3', initials: 'KV'}], tags: [{id: 'tag2', name: 'Backend', color: '#a3e635'}, {id: 'tag4', name: 'Frontend', color: '#22d3ee'}]},
        {id: 't7', title: 'Test payment gateway integration', dueDate: 'Nov 05', assignees: [{id: 'u3', initials: 'KV'}], tags: [{id: 'tag5', name: 'Testing', color: '#e94560'}]}
      ]
    },
    {
      id: 'done',
      title: 'Done',
      tasks: [
        {id: 't4', title: 'Setup project repository and CI/CD', dueDate: 'Oct 15', assignees: [{id: 'u1', initials: 'AJ'}], tags: [{id: 'tag6', name: 'DevOps', color: '#818cf8'}]},
        {id: 't5', title: 'Define database schema and migrations', dueDate: 'Oct 18', assignees: [{id: 'u2', initials: 'SA'}], tags: [{id: 'tag2', name: 'Backend', color: '#a3e635'}]}
      ]
    },
  ];

  const selectedTaskForDetail = kanbanColumns[1].tasks[0]; // "Implement user authentication flow"

  return (
    <div style={{ backgroundColor: '#164e63', color: '#f0f9ff' }} className="py-12 md:py-20 showcase-task-manager font-sans">
      <div className="container mx-auto px-4">
        {/* Main Showcase Header */}
        <header className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Task Manager Pro - Showcase
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-85">
            Organize, collaborate, and achieve more with a clean and intuitive task management experience.
          </p>
        </header>

        {/* Dashboard/Overview Section */}
        <section id="tm-dashboard" className="mb-16 md:mb-24">
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold" style={{ color: '#f0f9ff' }}>
              Dashboard Overview
            </h2>
            <button
              type="button"
              className="flex items-center text-sm font-medium py-2.5 px-5 rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#67e8f9', color: '#164e63' /* primary cyan bg, dark text for contrast */ }}
            >
              <FiPlusCircle className="w-5 h-5 mr-2" /> Add New Task
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {summaryTasks.map(task => (
              <SummaryCard key={task.id} title={task.title} count={task.count} icon={task.icon} />
            ))}
          </div>
        </section>
        {/* END Dashboard/Overview Section */}

        {/* Kanban Board View Section */}
        <section id="tm-kanban" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8 md:mb-12 text-center md:text-left" style={{ color: '#f0f9ff' }}>
            Project Board: Alpha Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {kanbanColumns.map(column => (
              <div key={column.id} className="p-4 rounded-lg min-h-[300px]" style={{ backgroundColor: '#0e7490' /* secondary */ }}>
                <h3 className="font-display text-xl font-semibold mb-4 text-center" style={{ color: '#67e8f9' /* primary cyan */ }}>
                  {column.title} ({column.tasks.length})
                </h3>
                <div className="space-y-3">
                  {column.tasks.map(task => (
                    <KanbanTaskCard
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      dueDate={task.dueDate}
                      assignees={task.assignees}
                      tags={task.tags}
                    />
                  ))}
                  {column.tasks.length === 0 && (
                    <p className="text-xs text-center opacity-60 py-4">No tasks yet.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* END Kanban Board View Section */}

        {/* Task Detail View (Modal/Pane Mockup) Section */}
        <section id="tm-task-detail" className="my-16 md:my-24 pt-12 border-t border-dashed" style={{borderColor: '#0e7490'}}>
          <header className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold" style={{ color: '#f0f9ff' }}>
              Task Details
            </h2>
          </header>
          <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-xl shadow-2xl" style={{ backgroundColor: '#0e7490' /* secondary */ }}>
            {/* Task Title */}
            <h3 className="text-2xl font-display font-semibold mb-6 border-b pb-3" style={{ color: '#67e8f9', borderColor: '#164e63' }}>
              {selectedTaskForDetail.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Status */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-wider mb-1 opacity-70">Status</label>
                <div className="p-2.5 rounded-md text-sm font-sans" style={{ backgroundColor: '#164e63', color: '#67e8f9' }}>In Progress</div>
              </div>
              {/* Assignees */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-wider mb-1 opacity-70">Assignees</label>
                <div className="flex items-center space-x-2 p-1.5 rounded-md" style={{backgroundColor: '#164e63'}}>
                  {selectedTaskForDetail.assignees?.map(a =>
                     <span key={a.id} className="flex items-center justify-center w-7 h-7 text-xs rounded-full" style={{backgroundColor: '#67e8f9', color: '#164e63'}} title={a.initials}>{a.initials}</span>
                  )}
                  <button type="button" className="w-7 h-7 rounded-full flex items-center justify-center border-2 border-dashed hover:border-[#67e8f9]" style={{borderColor: '#22d3ee', color: '#67e8f9'}} aria-label="Add Assignee">
                    <FiPlusCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {/* Due Date */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-wider mb-1 opacity-70">Due Date</label>
                <div className="p-2.5 rounded-md text-sm font-sans flex items-center" style={{backgroundColor: '#164e63'}}>
                  <FiCalendar className="w-4 h-4 mr-2 opacity-70"/> {selectedTaskForDetail.dueDate || 'Not set'}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-sm font-sans uppercase tracking-wider mb-1 opacity-70">Description</h4>
              <p className="text-sm p-2.5 rounded-md min-h-[60px]" style={{backgroundColor: '#164e63', color: '#f0f9ff', opacity: 0.9}}>
                This is a placeholder for the detailed task description. It would explain the requirements, context, and goals for this particular task to ensure clarity for the assignee.
              </p>
            </div>

            {/* Subtasks */}
            <div className="mb-6">
              <h4 className="text-sm font-sans uppercase tracking-wider mb-2 opacity-70">Subtasks (2/3)</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 p-2 rounded-md hover:opacity-80 cursor-pointer" style={{backgroundColor: '#164e63'}}>
                  <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 rounded" style={{accentColor: '#67e8f9', backgroundColor: '#0e7490'}} />
                  <span className="text-sm line-through opacity-60">Define API schema for user model</span>
                </label>
                <label className="flex items-center space-x-2 p-2 rounded-md hover:opacity-80 cursor-pointer" style={{backgroundColor: '#164e63'}}>
                  <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 rounded" style={{accentColor: '#67e8f9', backgroundColor: '#0e7490'}} />
                  <span className="text-sm line-through opacity-60">Implement JWT generation</span>
                </label>
                <label className="flex items-center space-x-2 p-2 rounded-md hover:opacity-80 cursor-pointer" style={{backgroundColor: '#164e63'}}>
                  <input type="checkbox" className="form-checkbox h-4 w-4 rounded" style={{accentColor: '#67e8f9', backgroundColor: '#0e7490'}} />
                  <span className="text-sm">Add password hashing</span>
                </label>
              </div>
            </div>

            {/* Attachments Placeholder - A simple list for now */}
            <div className="mb-6">
              <h4 className="text-sm font-sans uppercase tracking-wider mb-2 opacity-70">Attachments</h4>
              <ul className="space-y-1 list-disc list-inside pl-1 text-sm">
                <li className="hover:opacity-80 cursor-pointer">api-spec-v1.pdf</li>
                <li className="hover:opacity-80 cursor-pointer">user-flow-diagram.png</li>
              </ul>
            </div>


            {/* Comments/Activity */}
            <div>
              <h4 className="text-sm font-sans uppercase tracking-wider mb-3 opacity-70">Activity & Comments</h4>
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <span className="flex items-center justify-center w-6 h-6 text-xs rounded-full mt-0.5" style={{backgroundColor: '#67e8f9', color: '#164e63'}}>SA</span>
                  <div className="flex-1 p-2.5 rounded-md text-xs" style={{backgroundColor: '#164e63'}}>
                    <p className="font-semibold mb-0.5">Sarah Adams <span className="opacity-60 ml-1">2 hours ago</span></p>
                    <p className="opacity-90">Initial draft of the API endpoints is ready for review. Let me know your thoughts!</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <span className="flex items-center justify-center w-6 h-6 text-xs rounded-full mt-0.5" style={{backgroundColor: '#c084fc', color: '#164e63'}}>KV</span>
                  <div className="flex-1 p-2.5 rounded-md text-xs" style={{backgroundColor: '#164e63'}}>
                    <p className="font-semibold mb-0.5">Kevin Lee <span className="opacity-60 ml-1">15 mins ago</span></p>
                    <p className="opacity-90">Looks good overall. Just one question about the error handling for endpoint X...</p>
                  </div>
                </div>
                {/* Comment input mockup */}
                <div className="pt-2">
                  <textarea rows={2} placeholder="Add a comment..." className="w-full p-2 rounded-md text-xs border-none" style={{backgroundColor: '#0e7490', color: '#f0f9ff', opacity:0.8}}></textarea>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END Task Detail View Section */}

        {/* Team Collaboration Snippet Section */}
        <section id="tm-collaboration" className="my-16 md:my-24 pt-12 border-t border-dashed" style={{borderColor: '#0e7490'}}>
          <header className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold" style={{ color: '#f0f9ff' }}>
              Team Collaboration Hub
            </h2>
            <p className="text-lg text-[#f0f9ff]/80 max-w-xl mx-auto">Stay connected and work efficiently with your team.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column: Team Members & Sharing */}
            <div className="p-6 rounded-lg shadow-xl space-y-6" style={{backgroundColor: '#0e7490'}}>
              <div>
                <h3 className="text-xl font-display font-semibold mb-4" style={{color: '#67e8f9'}}>Project Team</h3>
                <div className="flex items-center space-x-3 mb-4">
                  {['AJ', 'SA', 'KV', 'LX'].map(initials => (
                    <span key={initials} className="flex items-center justify-center w-10 h-10 text-sm rounded-full border-2" style={{backgroundColor: '#164e63', color: '#f0f9ff', borderColor: '#67e8f9'}} title={`User ${initials}`}>
                      {initials}
                    </span>
                  ))}
                  <button type="button" className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-dashed hover:border-[#67e8f9] hover:text-[#67e8f9]" style={{borderColor: '#22d3ee', color: '#f0f9ff', opacity: 0.8}} aria-label="Add Team Member">
                    <FiPlusCircle className="w-5 h-5" />
                  </button>
                </div>
                <button type="button" className="w-full btn text-sm py-2 px-4 rounded-md transition-opacity" style={{backgroundColor: '#22d3ee', color: '#f0f9ff'}} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
                  Manage Team Members
                </button>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold mb-4" style={{color: '#67e8f9'}}>Share Project</h3>
                <div className="space-y-3">
                  <input type="email" placeholder="Invite by email (e.g., user@example.com)" className="w-full p-2.5 rounded-md text-sm border-none placeholder-opacity-50" style={{backgroundColor: '#164e63', color: '#f0f9ff'}} />
                  <div className="flex items-center justify-between p-2.5 rounded-md" style={{backgroundColor: '#164e63'}}>
                    <label htmlFor="public-link-toggle" className="text-sm flex-grow">Enable Public Link</label>
                    <button id="public-link-toggle" role="switch" aria-checked="false" className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0e7490] focus:ring-[#67e8f9]" style={{backgroundColor: '#22d3ee', opacity: 0.6}}>
                      <span className="inline-block w-4 h-4 transform bg-white rounded-full translate-x-1 transition-transform"/>
                    </button>
                  </div>
                  <button type="button" className="w-full btn text-sm py-2 px-4 rounded-md transition-opacity" style={{backgroundColor: '#67e8f9', color: '#164e63'}} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
                    Copy Shareable Link
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Activity Feed */}
            <div className="p-6 rounded-lg shadow-xl" style={{backgroundColor: '#0e7490'}}>
              <h3 className="text-xl font-display font-semibold mb-4" style={{color: '#67e8f9'}}>Recent Activity</h3>
              <ul className="space-y-3 max-h-[300px] overflow-y-auto">
                {[
                  {user: 'Alex J.', action: 'completed task "Setup project repository"', time: '1h ago', icon: <FiCheckCircle className="text-green-400 w-4 h-4"/>},
                  {user: 'Sarah A.', action: 'commented on "Develop API endpoints"', time: '3h ago', icon: <FiEdit className="text-yellow-400 w-4 h-4"/>},
                  {user: 'Kevin L.', action: 'was assigned to "Implement user auth"', time: 'Yesterday', icon: <FiUser className="text-blue-400 w-4 h-4"/>},
                  {user: 'Alex J.', action: 'added a new task "Write documentation"', time: '2 days ago', icon: <FiPlusCircle className="text-purple-400 w-4 h-4"/>},
                  {user: 'System', action: 'Project "Alpha Project" created', time: '3 days ago', icon: <FiClipboard className="text-gray-400 w-4 h-4"/>},
                ].map((activity, index) => (
                  <li key={index} className="flex items-start space-x-3 text-xs p-2 rounded-md" style={{backgroundColor: '#164e63'}}>
                    <span className="flex-shrink-0 mt-0.5">{activity.icon}</span>
                    <div>
                      <span className="font-medium" style={{color: '#f0f9ff'}}>{activity.user}</span>
                      <span className="opacity-80"> {activity.action}</span>
                      <p className="text-xs opacity-60">{activity.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* END Team Collaboration Snippet Section */}

      </div>
    </div>
  );
};

export default TaskManagerShowcase;
