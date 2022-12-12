import { Box, Button, Heading, Text, SimpleGrid, Center} from "@chakra-ui/react";
import Link from "next/link";

class CreatedProject {
    private projectName : string;
    private projectDescription : string;
    private projectURL : string;
    private projectOptionalImage : string;

    public constructor(projectName : string, projectDescription : string,
        projectURL : string, projectOptionalImage : string){
            this.projectDescription = projectDescription;
            this.projectURL = projectURL;
            this.projectOptionalImage = projectOptionalImage;
            this.projectName = projectName;
         }

        public getDescription(): string {
            return this.projectDescription;
        }

        public getProjectName(): string {
            return this.projectName;
        }

        public getProjectURL(): string {
            return this.projectURL;
        }

        public getProjectOptionalImage(): string {
            return this.projectOptionalImage
        }

         
}

function createProjectCard(project : CreatedProject) : any {
    return (
        <Box backgroundColor='#101010' mx='auto' alignItems='center'
            width={{
                base: '350px',
                sm: '400px',
                md: '350px',
                lg: '450px'
            }}
            height={{
                base: '350px',
                sm: '400px',
                md: '400px',
                lg: '450px'
            }}>
            <Heading as='h2' padding={4} textAlign='center'
            fontSize={{
                base: '24px',
                sm: '28px',
                md: '32px',
                lg: '36px'
            }}>{project.getProjectName()}</Heading>

            <Text padding={4} fontSize={{
                base: '15px',
                sm: '20px',
                md: '24px',
                lg: '28px'
            }}>{project.getDescription()}</Text>
            
            <Center>
                <Button mt='120px' 
                width={{
                    base: '70px',
                    sm: '120px',
                    md: '140px',
                    lg: '190px'
                }} height={{
                    base: '40px',
                    sm: '60px',
                    md: '40px',
                    lg: '60px'
                }} alignContent='center' fontSize={{
                    base: '10px',
                    sm: '12px',
                    md: '16px',
                    lg: '20px'
                }}><Link href={project.getProjectURL()}>
                </Link>See more content</Button>
            </Center>
        </Box>
    )
}

function configAllProjectCards(projects : Array<CreatedProject>) : any {
    return projects.map(project => createProjectCard(project));
}

function setupProjectCards(){
    return configAllProjectCards(
        Array.of(
            new CreatedProject('Portfolio Project',
            'This is a portfolio project, made for a great look for me.',
            'none',
            'none'),
            new CreatedProject('Functionable',
            'Simple discord bot, that is written in Java, and some new tools.',
            'none',
            'none')
        )
    )
}

function CreateProjectsComponent(){
    return (
        <SimpleGrid columns={{
            base: 1,
            sm: 1,
            md: 2,
            lg: 2
        }} spacing={10}>
            {
                setupProjectCards()
            }
        </SimpleGrid>
    );
}


export default CreateProjectsComponent;