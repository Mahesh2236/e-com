# --- STAGE 1: BUILD STAGE ---
# Using a full Maven image to compile and package the application
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copy only the pom.xml first to leverage Docker's layer caching for dependencies
COPY pom.xml .
# Note: If you use the maven wrapper inside docker, uncomment the next line
# COPY mvnw .
# COPY .mvn .mvn

# Copy the rest of the source code
COPY . .

# Build the application and skip tests for faster deployment
RUN mvn clean package -DskipTests

# --- STAGE 2: RUNTIME STAGE ---
# Using a smaller, secure JDK image for the final production container
FROM eclipse-temurin:17-jdk
WORKDIR /app

# Copy only the generated JAR from the build stage
# We rename it to app.jar to keep our ENTRYPOINT clean and independent of version numbers
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080 for Render to bind to
EXPOSE 8080

# Use ENTRYPOINT for a fixed startup command
ENTRYPOINT ["java", "-jar", "app.jar"]
