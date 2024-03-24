import { getMembersByTeam, getTeams } from "../data/teams.js";
import { html, renderContent } from "../lib.js";
import { getUserData } from "../util.js";


const teamsTemplate = (isUser, allTeams) => html`
    <section id="browse">

        <article class="pad-med">
            <h1>Team Browser</h1>
        </article>

        ${isUser ? html`
                        <article class="layout narrow">
                            <div class="pad-small"><a href="#" class="action cta">Create Team</a></div>
                        </article>`
                  : ""
        }

        ${allTeams.map(team => articleTemplateFunc(team))};

    </section>
`;

async function articleTemplateFunc(team) {
    const members = await getMembersByTeam(team._id);

    const articleTemplate = (team) => html`
    <article class="layout">
        <img src="${team.logoUrl}" class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${members} Members</span>
            <div><a href="#" class="action">See details</a></div>
        </div>
    </article>
    `;
    
    return articleTemplate;
}

export async function showTeams() {
    const isUser = getUserData();
    const allTeams = await getTeams();

    renderContent(teamsTemplate(isUser, allTeams));
}