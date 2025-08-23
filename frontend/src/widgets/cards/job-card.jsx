import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { PencilIcon, TrashIcon, PlusIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

const initialJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "OpenAI",
    location: "Remote",
    applicationDate: "2025-08-20",
    status: "Applied",
  },
];

export default function JobTable() {
  const [jobs, setJobs] = useState(initialJobs);
  const [editingId, setEditingId] = useState(null);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    applicationDate: "",
    status: "",
  });

  const handleEdit = (id) => setEditingId(id);

  const handleSave = (id, updatedJob) => {
    setJobs(jobs.map((job) => (job.id === id ? updatedJob : job)));
    setEditingId(null);
    // 🔗 PUT/PATCH to backend here
  };

  const handleDelete = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
    // 🔗 DELETE to backend here
  };

  const handleAdd = () => {
    const id = Date.now().toString();
    setJobs([...jobs, { id, ...newJob }]);
    setNewJob({ title: "", company: "", location: "", applicationDate: "", status: "" });
    // 🔗 POST to backend here
  };

  return (
    <div className="overflow-x-auto rounded-xl shadow-lg">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-blue-gray-50">
          <tr>
            <th className="p-3">Job Title</th>
            <th className="p-3">Company</th>
            <th className="p-3">Location</th>
            <th className="p-3">Application Date</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border-b hover:bg-blue-gray-50/20">
              {editingId === job.id ? (
                <>
                  <td className="p-3">
                    <Input
                      value={job.title}
                      onChange={(e) =>
                        setJobs(jobs.map((j) => (j.id === job.id ? { ...j, title: e.target.value } : j)))
                      }
                    />
                  </td>
                  <td className="p-3">
                    <Input
                      value={job.company}
                      onChange={(e) =>
                        setJobs(jobs.map((j) => (j.id === job.id ? { ...j, company: e.target.value } : j)))
                      }
                    />
                  </td>
                  <td className="p-3">
                    <Input
                      value={job.location}
                      onChange={(e) =>
                        setJobs(jobs.map((j) => (j.id === job.id ? { ...j, location: e.target.value } : j)))
                      }
                    />
                  </td>
                  <td className="p-3">
                    <Input
                      type="date"
                      value={job.applicationDate}
                      onChange={(e) =>
                        setJobs(
                          jobs.map((j) =>
                            j.id === job.id ? { ...j, applicationDate: e.target.value } : j
                          )
                        )
                      }
                    />
                  </td>
                  <td className="p-3">
                    <Input
                      value={job.status}
                      onChange={(e) =>
                        setJobs(jobs.map((j) => (j.id === job.id ? { ...j, status: e.target.value } : j)))
                      }
                    />
                  </td>
                  <td className="p-3 flex gap-2">
                    <Button size="sm" color="green" onClick={() => handleSave(job.id, job)}>
                      <CheckIcon className="h-4 w-4" />
                    </Button>
                    <Button size="sm" color="red" onClick={() => setEditingId(null)}>
                      <XMarkIcon className="h-4 w-4" />
                    </Button>
                  </td>
                </>
              ) : (
                <>
                  <td className="p-3">{job.title}</td>
                  <td className="p-3">{job.company}</td>
                  <td className="p-3">{job.location}</td>
                  <td className="p-3">{job.applicationDate}</td>
                  <td className="p-3">{job.status}</td>
                  <td className="p-3 flex gap-2">
                    <Button size="sm" variant="outlined" onClick={() => handleEdit(job.id)}>
                      <PencilIcon className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outlined" color="red" onClick={() => handleDelete(job.id)}>
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </td>
                </>
              )}
            </tr>
          ))}
          {/* New Job Row */}
          <tr className="bg-blue-gray-50/30">
            <td className="p-3">
              <Input
                placeholder="Job Title"
                value={newJob.title}
                onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
              />
            </td>
            <td className="p-3">
              <Input
                placeholder="Company"
                value={newJob.company}
                onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
              />
            </td>
            <td className="p-3">
              <Input
                placeholder="Location"
                value={newJob.location}
                onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
              />
            </td>
            <td className="p-3">
              <Input
                type="date"
                value={newJob.applicationDate}
                onChange={(e) => setNewJob({ ...newJob, applicationDate: e.target.value })}
              />
            </td>
            <td className="p-3">
              <Input
                placeholder="Status"
                value={newJob.status}
                onChange={(e) => setNewJob({ ...newJob, status: e.target.value })}
              />
            </td>
            <td className="p-3">
              <Button size="sm" color="blue" onClick={handleAdd}>
                <PlusIcon className="h-4 w-4" /> Add
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
