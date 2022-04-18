import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function RaceCards() {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Dwarf</Card.Title>
                    <Button variant='danger'>Choose Dwarf</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Elf</Card.Title>
                    <Button variant='success'>Choose Elf</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Halfling</Card.Title>
                    <Button variant='warning'>Choose Halfling</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Human</Card.Title>
                    <Button variant='secondary'>Choose Human</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Dragonborn</Card.Title>
                    <Button variant='danger'>Choose Dragonborn</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Gnome</Card.Title>
                    <Button variant='success'>Choose Gnome</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Half-Elf</Card.Title>
                    <Button variant='success'>Choose Half-Elf</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Half-Orc</Card.Title>
                    <Button variant='secondary'>Choose Half-Orc</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Tiefling</Card.Title>
                    <Button variant='dark'>Choose Tiefling</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Aasimar</Card.Title>
                    <Button variant='light'>Choose Aasimar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RaceCards