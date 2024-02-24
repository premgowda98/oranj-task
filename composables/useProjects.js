import projects from '@/data/projects.json'

export const useProjects = () =>{

    projects.forEach(element => {
        element['title'] = replaceAndTitleCase(element['slug'])
    });

    return {
        projects
    }
}

function replaceAndTitleCase(inputString) {
    // Replace hyphens with spaces
    let stringWithSpaces = inputString.replace(/-/g, ' ');

    // Convert to title case
    let titleCaseString = stringWithSpaces.replace(/\b\w/g, c => c.toUpperCase());

    return titleCaseString;
}