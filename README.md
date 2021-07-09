# adjsaver
Enter the directory of the version to run and the details are in the readme.

## Motivation

When tackling the issue of COVID-19 healthcare in underserved communities, we must first-and-foremost aim to provide tangible benefits. Quite simply, our goal is to have our target audience reach a successful conclusion--that the individuals of underserved regions reach the point of receiving testing, vaccination and/or treatment for COVID-19. To this end, the blatant hurdles are _cost_ and _distance_. 

If **both** of these are not tackled, the affected individuals will not pursue further healthcare. IQVIA Healthcare Locator SDK does provide distance metrics with 'Near Me', but how can we best utilize or expand on this? And with a lack of readily available cost information further complexified with insurance effects and lack of standardized pricing, how do we deal with the white elephant of cost? 

This is where we must face the reality that most of these individuals will have to travel to not just one but _multiple_ facilities to gain true pricing information. They may also have deal with overcrowding of a singular facility on the particular day and travel elsewhere regardless. Without a roadmap that eases and _assumes_ the visiting of multiple facilities they will likely quit after the first failed attempt and be unwilling to try again. 

Our proposed application is the use of graph theory and available tools to provide an order for names of nearest facilities based on the shortest path between them. In its ideal form, the user will end up with a recommended list of facilities to visit until they receive treatment. By having a framework that assumes the necessity of visiting multiple locations like a checklist, the user will be more motivated to follow through should the first (or first several) fail.

The simplest implementation is the use of the lat-lon coordinates of the healthcare locations to provide groupings of facilities within close proximity to each other. This mitigates the computational complexity and varying nature of road layouts in favor of a more universal solution. However tools do exist to optimize the computations with latest road layouts with Google Maps (and road conditions with Waze) and for larger numbers of groupings should the project idea prove promising and wish to be extended. 
