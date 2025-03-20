/*
    This file imports all skills, experience, awards, education, certifications (if I have any), outreach, projects, and publications
    to build a resume and save the PDF. Inputting the specified skillsets allows for the code to dynamically build resumes for specific
    jobs.
*/

import React from 'react';
import { Page, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';



// Skills
//import { skills } from "./resume_components/Skills";
//import { subskills } from "./resume_components/Skills";

// Projects
import ProjectsPage from "./resume_components/Projects";

// Publication Information
import PublicationsPage from "./resume_components/Publications";
//import { presentations } from "./resume_components/Publications";
//import { patents } from "./resume_components/Publications";
//import { ScholarLink } from "./resume_components/Publications";
//import { OrcIDLink } from "./resume_components/Publications";
//import { OrcID } from "./resume_components/Publications";


// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Experience
// Education
// Awards & Recognition
// Certifications
// Outreach
  
// Create Document Component
function  Resume(){
    return(
    <Document>
        <Page size="A4" style={styles.page}>
        <View style={styles.section}>
            <ProjectsPage />
        </View>
        <View style={styles.section}>
            <PublicationsPage />
        </View>
        </Page>
    </Document>);
};

function ResumeDocument()
{
    //ReactPDF.renderToStream(<Resume />);
    ReactPDF.render(<Resume />, `${__dirname}/FerrierResume.pdf`);
}

export default ResumeDocument;