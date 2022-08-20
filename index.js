<html>
<link rel="stylesheet" href="styles.css">
  <h1 id="title">Pre-course Survey Form</h1>
  <p id="description">Thank you for taking the time to help us improve the platform</p>
  <form id="survey-form">
   <label id="name-label">Name</label><br /><input required id="name" type="text" placeholder="your name"/> <br />
 <label id="email-label">Email</label>  <br />  <input required id="email" type="email"  placeholder="your email"/><br />
  <label id="number-label">Age</label> <br />  <input required id="number" type="number" max="10" min="1"  placeholder="your age"/>
<br />
<label class="edit">What would best describe your current role?</label> <br>
<select id="dropdown">
  <option value="name" id="drop-box">select an option</option>
  <option value="" id="drop-box"/>Student</option>
  <option value="" id="drop-box"/>Full time job</option>
  <option value="" id="drop-box"/>Prefer not to say</option>
</select><br />
<input type="radio" name="name" value="name" /> <label class="edit">Definitely</label><br/>
<input type="radio" name="name" value="name" /> <label class="edit">Maybe </label><br />
<input type="radio" name="name" value="name" /><label class="edit"> Not sure </label><br/>
<label id="Checks">What would you like to see improved? (Check all that apply)</label><br>
  <input type="checkbox" name="Front-end Projects" value="Front-end Projects"/><label class="edit">Front-end Projects</label><br>
  <input type="checkbox" name="Back-end Projects" value="Back-end Projects"/><label class="edit">Back-end Projects</label><br>
 <input type="checkbox" name="ata Visualization" value="ata Visualization"/><label class="edit">Data Visualization</label><br>

 <textarea class="edit" placeholder="additional comments"></textarea>
<br>
<input type="submit" value="submit" id="submit"> 
  </form>
</html>