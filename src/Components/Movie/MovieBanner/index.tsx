import '@mantine/core/styles.css';
import { Text,  Card, Image } from '@mantine/core';
import { Movie } from '../MovieInterface';
import { useNavigate } from 'react-router-dom';


const MovieBanner: React.FC<Movie> = ({title, genres, posterUrl, _id}) =>{
    const navigate = useNavigate();
    
    const handleCardClick = () => {
        navigate(`/movies/${_id}`);
    };

    return(
        <Card 
            className='makePointer' 
            p="lg" 
            withBorder={false} 
            style={{ width: 223, height: 450 }}
            onClick={handleCardClick} // Add click handler here
            >
            <Card.Section>
                <Image src={posterUrl} height={365} alt={title} />
            </Card.Section>
            <Text fw={500} size="lg" mt="sm">
                {title}
            </Text>
            <Text size="sm" style={{color: "grey"}}>
                {genres.join("/ ")}
            </Text>
        </Card>
    );
}

export default MovieBanner;