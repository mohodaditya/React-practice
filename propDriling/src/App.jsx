import React from 'react'
import Card from './Card/Card'
import './App.css'

const App = () => {

  const users = [
    {
      id: 1,
      name: "Aditya Mohod",
      role: "A MERN stack dev who loves to build user-satisfied interfaces!",
      followers: "500+",
      avatar: "https://img.magnific.com/free-vector/young-man-with-glasses-avatar_1308-175763.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Frontend developer who loves creating modern React interfaces!",
      followers: "1.2K+",
      avatar: "https://img.magnific.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "UI/UX designer passionate about creating simple and beautiful experiences!",
      followers: "850+",
      avatar: "https://t4.ftcdn.net/jpg/05/24/45/81/360_F_524458138_Pt5uvUIUosSPIhb1PGHISPXBAqBTqYJz.jpg"
    },
    {
      id: 4,
      name: "Arjun Verma",
      role: "Full stack developer who enjoys building scalable web applications!",
      followers: "2K+",
      avatar: "https://img.magnific.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 5,
      name: "Sneha Kulkarni",
      role: "JavaScript developer who loves turning ideas into interactive products!",
      followers: "750+",
      avatar: "https://img.magnific.com/free-photo/woman-with-long-brown-hair_1308-179038.jpg"
    },
    {
      id: 6,
      name: "Vikram Singh",
      role: "Backend developer focused on APIs, databases and reliable systems!",
      followers: "1.5K+",
      avatar: "https://png.pngtree.com/png-vector/20240914/ourmid/pngtree-cartoon-vector-avatar-png-image_13550108.png"
    },
    {
      id: 7,
      name: "Ananya Deshmukh",
      role: "React developer who enjoys building clean and responsive web apps!",
      followers: "920+",
      avatar: "https://thumbs.dreamstime.com/b/beautiful-woman-avatar-portrait-profile-flat-vector-character-449247318.jpg"
    },
    {
      id: 8,
      name: "Rohan Patil",
      role: "MERN stack developer exploring cloud technologies and modern web development!",
      followers: "1.8K+",
      avatar: "https://img.magnific.com/free-vector/young-man-orange-hoodie_1308-175788.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 9,
      name: "Neha Joshi",
      role: "Software developer passionate about solving problems with clean code!",
      followers: "680+",
      avatar: "https://img.magnific.com/free-photo/woman-with-long-brown-hair_1308-179038.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 10,
      name: "Karan Mehta",
      role: "Web developer who loves building fast, responsive and accessible websites!",
      followers: "2.3K+",
      avatar: "https://img.magnific.com/free-vector/smiling-young-man-glasses_1308-174702.jpg?semt=ais_hybrid&w=740&q=80"
    }
  ]

  return (
    <main className="app">

      <h1 className="title">
        This is a prop drilling practice app
      </h1>

      <div className="cards">

        {users.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            role={user.role}
            followers={user.followers}
            avatar={user.avatar}
          />
        ))}

      </div>

    </main>
  )
}

export default App