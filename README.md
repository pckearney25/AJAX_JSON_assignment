#     AJAX_JSON_assignment
	More experience with dynamic variables, using JSON and AJAX, working with
the Giphy API

###            Overview
			1. In this assignment, we used the GIPHY API to make a dynamic
		web page that populates with gifs of our chosing. To finish this
		task, we called the GIPHY API and used JavaScript and jQuery to
		change the HTML of our site.

###            Provided Instructions
### 
			1. Before you can make any part of our site work, you need to
		create an array of strings, each one related to a topic that
		interests you. Save it to a variable called `topics`. * We chose
		animals for our theme, but you can make a list to your own liking.

			2. Your app should take the topics in this array and create
		buttons in your HTML. * Try using a loop that appends a button for
		each string in the array.

			3. When the user clicks on a button, the page should grab 10
		static, non-animated gif images from the GIPHY API and place them on
		the page.

			4. When the user clicks one of the still GIPHY images, the gif
		should animate. If the user clicks the gif again, it should stop
		playing.

			5. Under every gif, display its rating (PG, G, so on). * This
		data is provided by the GIPHY API. * Only once you get images
		displaying with button presses should you move on to the next step.

			6. Add a form to your page takes the value from a user input box
		and adds it into your `topics` array. Then make a function call that
		takes each topic in the array remakes the buttons on the page.

			7. Deploy your assignment to Github Pages.

			8. **Rejoice**! You just made something really


###            Execution
### 
			1. Rejoicing aside, this assignment was pretty straight forward and was 
		accomplished by working individually.

			2. This was largely an exercise in creating a dynamic page with minimal 
		HTML code. A dog theme was chosen and an array of dogs was created. Using 
		the array, the buttons were created first.

			3. After the buttons were in place, click functionality was
		added to them to querry the Giphy site to return data for 12
		gifs. (I added two extras.) This data was then used to populate
		dynamically generated inline divs which contained the gif rating
		and an image.

			4. Data parameters within the <img> tag were used to denote
		the acitve vs still state of the image and to hold the
		appropriate static/active URL information. 
		
			5. Additional on click monitoring the images was then added to switch between
		still and active atates. 
