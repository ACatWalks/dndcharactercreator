import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css'

function RaceCards(props) {
    return (
        <div>
            <Card>
                <Card.Img variant='top' src='https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/254/420/618/636271781394265550.png' />
                <Card.Body>
                    <Card.Title>Dwarf</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/races/13-dwarf' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='danger' id='Dwarf' onClick={props.onClick}>Choose Dwarf</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://i.pinimg.com/736x/b0/99/0b/b0990bcad99b04a759ead153633eb1ca.jpg' />
                <Card.Body>
                    <Card.Title>Elf</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/races/3-elf' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='success' id='Elf' onClick={props.onClick}>Choose Elf</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/256/420/618/636271789409776659.png' />
                <Card.Body>
                    <Card.Title>Halfling</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/races/14-halfling' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='warning' id='Halfling' onClick={props.onClick}>Choose Halfling</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://i.pinimg.com/736x/d2/76/ff/d276ffe76dc9f561d82413446c93d9ce.jpg' />
                <Card.Body>
                    <Card.Title>Human</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/races/1-human' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='secondary' id='Human' onClick={props.onClick}>Choose Human</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png' />
                <Card.Body>
                    <Card.Title>Dragonborn</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/races/16-dragonborn' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='danger' id='Dragonborn' onClick={props.onClick}>Choose Dragonborn</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/334/420/618/636272671553055253.png' />
                <Card.Body>
                    <Card.Title>Gnome</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/races/18-gnome' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='success' id='Gnome' onClick={props.onClick}>Choose Gnome</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://i.pinimg.com/736x/1d/5c/b2/1d5cb2f0924c8c879ae136bc4cfe39a7.jpg' />
                <Card.Body>
                    <Card.Title>Half-Elf</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/races/20-half-elf' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='success' id='Half-Elf' onClick={props.onClick}>Choose Half-Elf</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://i.pinimg.com/originals/f6/40/24/f64024a68bb1cb43fa55397ea05a72f4.jpg' />
                <Card.Body>
                    <Card.Title>Half-Orc</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/races/2-half-orc' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='secondary' id='Half-Orc' onClick={props.onClick}>Choose Half-Orc</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://www.dndbeyond.com/avatars/thumbnails/7/641/420/618/636287076637981942.png' />
                <Card.Body>
                    <Card.Title>Tiefling</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/races/7-tiefling' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='dark' id='Tiefling' onClick={props.onClick}>Choose Tiefling</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='http://dnd5echaractersheet.us/wp-content/uploads/2019/04/Aasimar-5th-edition-5e.png' />
                <Card.Body>
                    <Card.Title>Aasimar</Card.Title>
                    <Card.Link href='http://dnd5e.wikidot.com/aasimar' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='light' id='Aasimar' onClick={props.onClick}>Choose Aasimar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RaceCards