// Main App Logic

class CharacterDatabase {
  constructor() {
    this.currentPage = 'characters';
    this.selectedCharacter = null;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.showCharactersPage();
  }

  setupEventListeners() {
    // Navigation buttons
    document.getElementById('btnCharacters').addEventListener('click', () => this.showCharactersPage());
    document.getElementById('btnOrganizations').addEventListener('click', () => this.showOrganizationsPage());
    const header = document.getElementById('mainHeader');
    const toggle = document.getElementById('headerToggle');

    toggle.addEventListener('click', () => {
      header.classList.toggle('collapsed');
      toggle.textContent = header.classList.contains('collapsed') ? '▲' : '▼';
    });



    
    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => this.handleSearch(e));

    // Modal
    document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
    document.getElementById('modal').addEventListener('click', (e) => {
      if (e.target.id === 'modal') this.closeModal();
    });
  }

  showCharactersPage() {
    this.currentPage = 'characters';
    document.getElementById('btnCharacters').classList.add('active');
    document.getElementById('btnOrganizations').classList.remove('active');
    document.getElementById('searchContainer').style.display = 'block';
    document.getElementById('orgContainer').style.display = 'none';
    document.getElementById('charContainer').style.display = 'block';
    document.getElementById('searchInput').value = '';
    this.renderCharacters(characters);
  }

  showOrganizationsPage() {
    this.currentPage = 'organizations';
    document.getElementById('btnCharacters').classList.remove('active');
    document.getElementById('btnOrganizations').classList.add('active');
    document.getElementById('searchContainer').style.display = 'none';
    document.getElementById('charContainer').style.display = 'none';
    document.getElementById('orgContainer').style.display = 'block';
    this.renderOrganizations();
  }

  renderCharacters(charsToRender) {
    const grid = document.getElementById('characterGrid');
    grid.innerHTML = '';

    if (charsToRender.length === 0) {
      grid.innerHTML = '<div class="empty-state"><h3>キャラクターが見つかりません</h3></div>';
      return;
    }

    charsToRender.forEach(char => {
      const icon = document.createElement('div');
      icon.className = 'character-icon';
      icon.innerHTML = `
        <img src="${char.imageUrl}" alt="${char.name}">
        <div class="character-icon-name">${char.name}</div>
      `;
      icon.addEventListener('click', () => this.showCharacterDetail(char));
      grid.appendChild(icon);
    });
  }

  handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const filtered = characters.filter(char =>
      char.name.toLowerCase().includes(query) ||
      char.nameEn?.toLowerCase().includes(query) ||
      char.organization.toLowerCase().includes(query)
    );
    this.renderCharacters(filtered);
  }

  showCharacterDetail(char) {
    this.selectedCharacter = char;
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    // Get related characters
    const relatedChars = characters.filter(c => c.organization === char.organization && c.id !== char.id);

    modalBody.innerHTML = `
      <div class="modal-header">
        <div class="modal-image">
          <img src="${char.imageUrl}" alt="${char.name}">
        </div>
        <div class="modal-info">
          <h2 class="character-name">
            ${char.name}
            ${char.nameEn ? `<div class="name-en">${char.nameEn}</div>` : ''}
          </h2>
          <span class="role">${char.role}</span>
          <div class="organization" onclick="app.navigateToOrganization('${char.organization}')">
            <div class="org-label">ORGANIZATION</div>
            <div class="org-name">${char.organization}</div>
          </div>
          ${char.quote ? `
            <div class="character-quote">
              ${Array.isArray(char.quote)
                ? char.quote[Math.floor(Math.random() * char.quote.length)]
                : char.quote}
            </div>
          ` : ''}
        </div>
      </div>

      <div class="modal-body">
        <div class="section">
          <div class="section-title">概要</div>
          <p class="description">${char.description}</p>
        </div>

        <div class="section">
          <div class="section-title">基本情報</div>
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">生年月日</div>
              <div class="info-value">${char.birthDate}</div>
            </div>
            <div class="info-item">
              <div class="info-label">年齢</div>
              <div class="info-value">${char.age}歳</div>
            </div>
            <div class="info-item">
              <div class="info-label">身長</div>
              <div class="info-value">${char.height}</div>
            </div>
            <div class="info-item">
              <div class="info-label">体重</div>
              <div class="info-value">${char.weight}</div>
            </div>
            <div class="info-item">
              <div class="info-label">血液型</div>
              <div class="info-value">${char.bloodType}</div>
            </div>
            <div class="info-item">
              <div class="info-label">表の顔</div>
              <div class="info-value">${char.publicFace}</div>
            </div>
            <div class="info-item">
              <div class="info-label">信念</div>
              <div class="info-value">${char.belief}</div>
            </div>
            <div class="info-item">
              <div class="info-label">イラスト作成者</div>
              <div class="info-value">${char.artist}</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">能力</div>
          <ul class="ability-list">
            ${char.abilities.map(ability => `
              <li class="ability-item">
                <div class="ability-name">${ability.name}</div>
                <div class="ability-description">${ability.description}</div>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="section">
          <div class="section-title">武装・装備</div>
          <ul class="weapon-list">
            ${char.weapons.map(weapon => `
              <li class="weapon-item">
                <div class="weapon-name">${weapon.name}</div>
                <div class="weapon-description">${weapon.description}</div>
              </li>
            `).join('')}
          </ul>
        </div>

        ${relatedChars.length > 0 ? `
          <div class="related-characters">
            <div class="related-title">同じ所属のキャラクター</div>
            <div class="related-grid">
              ${relatedChars.map(relChar => `
                <div class="related-icon" onclick="app.showCharacterDetail(characters.find(c => c.id === '${relChar.id}'))">
                  <img src="${relChar.imageUrl}" alt="${relChar.name}" title="${relChar.name}">
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    modal.classList.add('active');
  }

  closeModal() {
    document.getElementById('modal').classList.remove('active');
    this.selectedCharacter = null;
  }

  renderOrganizations() {
    const container = document.getElementById('orgContainer');
    const grid = document.createElement('div');
    grid.className = 'org-grid';

    organizations.forEach(org => {
      const card = document.createElement('div');
      card.className = 'org-card';
      card.innerHTML = `
        <img src="${org.logo}" alt="${org.name}" class="org-logo">
        <h3 class="org-name">${org.name}</h3>
        <p class="org-description">${org.description}</p>
      `;
      card.addEventListener('click', () => this.showOrganizationDetail(org));
      grid.appendChild(card);
    });

    container.innerHTML = '';
    container.appendChild(grid);
  }

  showOrganizationDetail(org) {
    const container = document.getElementById('orgContainer');
    const members = org.members.map(member => {
      const char = characters.find(c => c.id === member.characterId);
      return { ...member, character: char };
    });

    container.innerHTML = `
      <button class="btn btn-back" onclick="app.showOrganizationsPage()">← 組織一覧に戻る</button>

      <div class="org-detail-header">
        <img src="${org.logo}" alt="${org.name}" class="org-detail-logo">
        <div class="org-detail-info">
          <h2>${org.name}</h2>
          <p class="org-detail-description">${org.description}</p>
        </div>
      </div>

      <div class="section">
        <div class="section-title">構成員</div>
        <ul class="members-list">
          ${members.map(member => `
            <li class="member-item" onclick="app.showCharacterDetail(characters.find(c => c.id === '${member.characterId}'))">
              <div class="member-title">${member.title}</div>
              <div class="member-name">${member.name}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  navigateToOrganization(orgName) {
    const org = organizations.find(o => o.name === orgName);
    if (org) {
      this.closeModal();
      this.showOrganizationsPage();
      setTimeout(() => this.showOrganizationDetail(org), 100);
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new CharacterDatabase();
});
