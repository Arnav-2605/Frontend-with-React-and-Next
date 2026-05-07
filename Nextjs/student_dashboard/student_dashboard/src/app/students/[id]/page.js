import Link from 'next/link';

export default async function StudentDetails({params})
{
    const {id} = await params;

    const students = [
        {id: 1, name: "Arnav Srivastava", course: "ReactJs"},
        {id: 2, name: "Aryan Tiwari", course: "NextJs"},
        {id: 3, name: "Ashish Keshri", course: "React"}        
    ];

    const student = students.find(s => s.id == id);

    return (
        <div>
            <h1>Student Detail</h1>

            {student ? (
                <div className="card">
                <h2>{student.name}</h2>
                <p>ID: {student.id}</p>
                <p>Course: {student.course}</p>
                </div>
            ) : (
                <p>No student found</p>
                )}
        </div>
    )
}