<section id="projects">
            <div class="projects-container">
                <h2 class="section-title">Latest <span>Projects</span></h2>

                <div class="portfolio-filter">
                    <button class="filter-btn" data-filter="web-3d">WEB 3D</button>
                </div>

                <div class="projects-grid">
                    <!-- Project 1 TABLE -->
                    <div class="project-item web-3d">
                        <div class="project-image">
                            <img src="assets/table.png" alt="table Project">
                            <div class="project-overlay">
                                <div class="project-info">
                                    <h3>TABLE</h3>
                                    <p>web-3d</p>
                                    <button class="view-project-btn" data-id="project1">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Project 2 bolling water -->
                    <div class="project-item web-3d">
                        <div class="project-image">
                            <img src="assets/Boilingwater.png" alt="Boilingwater Project">
                            <div class="project-overlay">
                                <div class="project-info">
                                    <h3>Boiling Water</h3>
                                    <p>web-3d</p>
                                    <button class="view-project-btn" data-id="project2">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Project 3 Elastic deformation of a material -->
                    <div class="project-item web-3d">
                        <div class="project-image">
                            <img src="assets/ball.png" alt="ball Project">
                            <div class="project-overlay">
                                <div class="project-info">
                                    <h3>Elastic deformation of a material</h3>
                                    <p>web-3d</p>
                                    <button class="view-project-btn" data-id="project3">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Project Modal Template -->
            <div class="project-modal" id="projectModal">
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <div class="modal-body">
                        <div class="modal-image-container">
                            <img id="modalImage" src="" alt="Project Image">
                        </div>
                        <div class="modal-details">
                            <h2 id="modalTitle"></h2>
                            <p class="modal-category" id="modalCategory"></p>
                            <div class="modal-description" id="modalDescription"></div>
                            <div class="modal-meta">
                                <div class="meta-item">
                                    <h4>Client</h4>
                                    <p id="modalClient"></p>
                                </div>
                                <div class="meta-item">
                                    <h4>Date</h4>
                                    <p id="modalDate"></p>
                                </div>
                                <div class="meta-item">
                                    <h4>Skills</h4>
                                    <p id="modalSkills"></p>
                                </div>
                            </div>

                            <!-- ✅ أزرار فتح الملفات -->
                            <div class="modal-buttons">
                                <a id="modalBlenderBtn" href="#" download class="btn">Download Blender File</a>
                                <a id="modalReportBtn" href="#" target="_blank" class="btn">View Report</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>