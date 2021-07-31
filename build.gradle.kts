import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import java.util.*

plugins {
    kotlin("jvm") version "1.5.10"
}

group = "io.github.archecraft"
version = "1.0"

val localProperties = Properties()
localProperties.load(rootProject.file("local.properties").inputStream())

repositories {
    mavenCentral()
    maven {
        name = "GitHubPackages"
        url = uri("https://maven.pkg.github.com/ArcheCraft/KubeJS-Generator")
        credentials {
            username = localProperties.getProperty("gpr.user") ?: System.getenv("USERNAME")
            password = localProperties.getProperty("gpr.key") ?: System.getenv("TOKEN")
        }
    }
}

tasks.withType<KotlinCompile>() {
    kotlinOptions.jvmTarget = "13"
}

dependencies {
    implementation("io.github.archecraft:kubejs-generator:1.0")
}