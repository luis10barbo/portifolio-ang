import { ImageType } from "./imageModel"

// Language,
// Framework,
// Database,
// Versioning,
// OperationalSystem

export type SkillCategory = "Language" | "Framework" | "Database" | "Versioning" | "OperationalSystem";

export type TechnologyTypeEnum = "Backend" | "Frontend"

export type SkillType = {
    
    // private @Id @GeneratedValue Long id;
    // private @NotNull @Column(nullable = false) String name;
    // private @OneToOne(targetEntity = ImageEntity.class) List<ImageEntity> img = new ArrayList<>();
    // private SkillCategory category;
    // private TechnologyTypeEnum type;
    
    id?: number,
    name: String,
    image: ImageType,
    category: SkillCategory,
    type: TechnologyTypeEnum
    
}