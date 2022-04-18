import React from 'react'
import Form from 'react-bootstrap/Form'

function CharacterForm(props) {
    return (
        <div>
            <Form>
                <h2>The Basics</h2>
                <Form.Group controlId='formRace'>
                    <h4>Race</h4>
                    <p>{props.race}</p>
                </Form.Group>
                <Form.Group controlId='formClass'>
                    <h4>Class</h4> 
                    <p>{props.characterClass}</p>   
                </Form.Group>
                <Form.Group controlId='formAlignment'>
                    <h4>Alignment</h4>
                    <Form.Select aria-label='alignment dropdown'>
                        <option value='lg'>Lawful Good</option>
                        <option value='ng'>Neutral Good</option> 
                        <option value='cg'>Chaotic Good</option> 
                        <option value='ln'>Lawful Neutral</option> 
                        <option value='nn'>True Neutral</option> 
                        <option value='cn'>Chaotic Neutral</option> 
                        <option value='le'>Lawful Evil</option> 
                        <option value='ne'>Neutral Evil</option> 
                        <option value='ce'>Chaotic Evil</option>     
                    </Form.Select>    
                </Form.Group>
                <Form.Group controlId='formLanguages'>
                    <h4>Languages</h4>
                    <Form.Control as='textarea' rows={2}></Form.Control>    
                </Form.Group>
                <Form.Group controlId='formBackground'>
                    <h4>Background</h4>
                    <Form.Select aria-label='background dropdown'>
                        <option value='a'>Acolyte</option> 
                        <option value='c1'>Charlatan</option> 
                        <option value='c2'>Criminal (variant: Spy)</option> 
                        <option value='e'>Entertainer (variant: Gladiator)</option> 
                        <option value='fh'>Folk Hero/ine</option> 
                        <option value='ga'>Guild Artisan (variant: Guild Merchant)</option> 
                        <option value='h'>Hermit</option> 
                        <option value='n'>Noble</option> 
                        <option value='o'>Outlander</option> 
                        <option value='s1'>Sage</option> 
                        <option value='s2'>Sailor (variant: Pirate)</option> 
                        <option value='s3'>Soldier</option> 
                        <option value='u'>Urchin</option>    
                    </Form.Select>    
                </Form.Group>
                <h2>Equipment</h2>
                <Form.Group controlId='formArmor'>
                    <h4>Armor</h4>
                    <Form.Control as='textarea' rows={1}></Form.Control>    
                </Form.Group>
                <Form.Group controlId='formWeapons'>
                    <h4>Weapons</h4>
                    <Form.Control as='textarea' rows={4}></Form.Control>    
                </Form.Group>
                <Form.Group controlId='formPack'>
                    <h4>Equipment Pack</h4>
                    <Form.Select aria-label='equipment pack dropdown'>
                        <option value='burglar'>Burglar's Pack</option>
                        <option value='diplomat'>Diplomat's Pack</option>
                        <option value='dungeoneer'>Dungeoneer's Pack</option>
                        <option value='entertainer'>Entertainer's Pack</option>
                        <option value='explorer'>Explorer's Pack</option>
                        <option value='priest'>Priest's Pack</option>
                        <option value='scholar'>Scholar's Pack</option>
                        <option value='custom'>Custom</option>
                    </Form.Select>    
                </Form.Group>
                <h2>Proficiences and Scores</h2>
                <Form.Group controlId='formToolProfs'>
                    <h4>Tool Proficiences</h4>
                    <Form.Control as='textarea' rows={3}></Form.Control>    
                </Form.Group>
                <Form.Group controlId='formLifestyle'>
                    <h4>Lifestyle</h4>
                    <Form.Check inline type='radio' label='Wretched' id='wretched'></Form.Check>
                    <Form.Check inline type='radio' label='Squalid' id='squalid'></Form.Check>
                    <Form.Check inline type='radio' label='Poor' id='poor'></Form.Check>
                    <Form.Check inline type='radio' label='Modest' id='modest'></Form.Check>
                    <Form.Check inline type='radio' label='Comfortable' id='comfortable'></Form.Check>
                    <Form.Check inline type='radio' label='Wealthy' id='wealthy'></Form.Check>
                    <Form.Check inline type='radio' label='Aristocratic' id='aristocratic'></Form.Check>
                    <Form.Text muted>This is optional, but can help you visualize your character better. Consider the risks of all choices.</Form.Text>    
                </Form.Group>
                <Form.Group controlId='formFeats'>
                    <h4>Feats</h4>
                    <Form.Control as='textarea' rows={3}></Form.Control>
                    <Form.Text muted>This is optional and not recommended for beginners. Experienced players may enjoy customizing their character further.</Form.Text>
                </Form.Group>
                <Form.Group controlId='formScores'>
                    <h4>Ability Scores</h4>
                    <Form.Label>Strength</Form.Label>
                    <Form.Control required type='number' defaultValue='10' min='1' max='20'></Form.Control>
                    <Form.Label>Dexterity</Form.Label> 
                    <Form.Control required type='number' defaultValue='10' min='1' max='20'></Form.Control>
                    <Form.Label>Constitution</Form.Label> 
                    <Form.Control required type='number' defaultValue='10' min='1' max='20'></Form.Control>
                    <Form.Label>Intelligence</Form.Label> 
                    <Form.Control required type='number' defaultValue='10' min='1' max='20'></Form.Control>
                    <Form.Label>Wisdom</Form.Label> 
                    <Form.Control required type='number' defaultValue='10' min='1' max='20'></Form.Control>
                    <Form.Label>Charisma</Form.Label> 
                    <Form.Control required type='number' defaultValue='10' min='1' max='20'></Form.Control>    
                </Form.Group>
                <Form.Group controlId='formSkillProfs'>
                    <h4>Skill Proficiences</h4> 
                    <Form.Check inline type='checkbox' label='Athletics' id='athletics'></Form.Check>
                    <Form.Check inline type='checkbox' label='Acrobatics' id='acrobatics'></Form.Check> 
                    <Form.Check inline type='checkbox' label='Sleight of Hand' id='sleight-of-hand'></Form.Check> 
                    <Form.Check inline type='checkbox' label='Stealth' id='stealth'></Form.Check> 
                    <Form.Check inline type='checkbox' label='Arcana' id='arcana'></Form.Check> 
                    <Form.Check inline type='checkbox' label='History' id='history'></Form.Check> 
                    <Form.Check inline type='checkbox' label='Nature' id='nature'></Form.Check> 
                    <Form.Check inline type='checkbox' label='Religion' id='religion'></Form.Check> 
                    <Form.Check inline type='checkbox' label='Animal Handling' id='animal-handling'></Form.Check> 
                    <Form.Check inline type='checkbox' label='Insight' id='insight'></Form.Check> 
                    <Form.Check inline type='checkbox' label='Medicine' id='medicine'></Form.Check> 
                    <Form.Check inline type='checkbox' label='Perception' id='perception'></Form.Check> 
                    <Form.Check inline type='checkbox' label='Survival' id='survival'></Form.Check> 
                    <Form.Check inline type='checkbox' label='Deception' id='deception'></Form.Check> 
                    <Form.Check inline type='checkbox' label='Intimidation' id='intimidation'></Form.Check> 
                    <Form.Check inline type='checkbox' label='Persuasion' id='persuasion'></Form.Check> 
                    <Form.Check inline type='checkbox' label='Performance' id='performance'></Form.Check>    
                </Form.Group>
                <h2>Spells and Miscellaneous</h2>
                <Form.Group controlId='formSpells'>
                    <h4>Spells</h4>
                    <Form.Label>Cantrips</Form.Label>
                    <Form.Control type='textarea' rows={5}></Form.Control>
                    <Form.Label>Level 1</Form.Label>
                    <Form.Control type='textarea' rows={4}></Form.Control>
                    <Form.Label>Level 2</Form.Label>
                    <Form.Control type='textarea' rows={3}></Form.Control>
                    <Form.Label>Level 3</Form.Label>
                    <Form.Control type='textarea' rows={3}></Form.Control>
                    <Form.Label>Level 4</Form.Label>
                    <Form.Control type='textarea' rows={3}></Form.Control>
                    <Form.Label>Level 5</Form.Label>
                    <Form.Control type='textarea' rows={3}></Form.Control>
                    <Form.Label>Level 6</Form.Label>
                    <Form.Control type='textarea' rows={2}></Form.Control>
                    <Form.Label>Level 7</Form.Label>
                    <Form.Control type='textarea' rows={2}></Form.Control>
                    <Form.Label>Level 8</Form.Label>
                    <Form.Control type='textarea' rows={1}></Form.Control>
                    <Form.Label>Level 9</Form.Label> 
                    <Form.Control type='textarea' rows={1}></Form.Control>   
                </Form.Group>
                <Form.Group controlId='formAnimals'>
                    <h4>Relevant Animals</h4>  
                    <Form.Control type='textarea' rows={3}></Form.Control>
                    <Form.Text muted>If your character has an animal associated with him/her (e.g. a ranger's companion, a warlock's familiar, or a druid's Wild Shape, please list it/them here.</Form.Text>  
                </Form.Group>
                <Form.Group controlId='formPlanarDestination'>
                    <h4>Which plane will your character's soul go to when s/he dies?</h4>  
                    <Form.Control type='textarea' rows={1}></Form.Control>  
                    <Form.Text muted>This is optional, but can help you craft your character's story arc.</Form.Text>
                </Form.Group>
            </Form>
        </div>
    )
}

export default CharacterForm