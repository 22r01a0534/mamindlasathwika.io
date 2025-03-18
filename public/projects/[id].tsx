// app/projects/[id].tsx
import { GetStaticProps, GetStaticPaths } from 'next';

export const generateStaticParams = async () => {
     return [
          { id: 'project1.png' },
          { id: 'project2.png' }
     ];
};

export default function ProjectPage({ params }: { params: { id: string } }) {
     return (
          <div>
               <h1>Project: {params.id}</h1>
               <img src={`/projects/${params.id}`} alt={params.id} />
          </div>
     );
}
