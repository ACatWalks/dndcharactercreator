import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ClassCards() {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Barbarian</Card.Title>
                    <Button variant='primary'>Choose Barbarian</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Bard</Card.Title>
                    <Button variant='info'>Choose Bard</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Cleric</Card.Title>
                    <Button variant='info'>Choose Cleric</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Druid</Card.Title>
                    <Button variant='info'>Choose Druid</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Fighter</Card.Title>
                    <Button variant='primary'>Choose Fighter</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Monk</Card.Title>
                    <Button variant='primary'>Choose Monk</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Paladin</Card.Title>
                    <Button variant='primary'>Choose Paladin</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Ranger</Card.Title>
                    <Button variant='primary'>Choose Ranger</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Rogue</Card.Title>
                    <Button variant='primary'>Choose Rogue</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Sorcerer</Card.Title>
                    <Button variant='info'>Choose Sorcerer</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Warlock</Card.Title>
                    <Button variant='info'>Choose Warlock</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Wizard</Card.Title>
                    <Button variant='info'>Choose Wizard</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ClassCards