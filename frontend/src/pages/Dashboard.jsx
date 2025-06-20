import { useState } from 'react';
import { MdOutlineCancel, MdOutlineSettings } from "react-icons/md";
import './Dashboard.css';

const users = new Array(26).fill(null).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  date: `0${i + 1}/0${(i % 12) + 1}/201${i % 10}`,
  role: ['Admin', 'Publisher', 'Reviewer', 'Moderator'][i % 4],
  status: ['Active', 'Suspended', 'Inactive'][i % 3],
  img: `https://randomuser.me/api/portraits/thumb/${i % 2 === 0 ? 'men' : 'women'}/${i}.jpg`,
}));

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / rowsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Date Created</th><th>Role</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td><img src={u.img} alt="user" /> {u.name}</td>
              <td>{u.date}</td>
              <td>{u.role}</td>
              <td className={`status ${u.status.toLowerCase()}`}>{u.status}</td>
              <td><MdOutlineSettings className="action-icon" /> <MdOutlineCancel className="action-icon" /></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Dashboard;
